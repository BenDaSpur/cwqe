<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recipes.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import { Row, Col } from "sveltestrap/src/";
  import Image from "svelte-image";
  const { page } = stores();
  export let viewCategory = $page.query.category;
  export let posts;
  //sorted from new to old
  const sortedPosts = posts.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  let finalPosts = [];
  // If category in url is set
  if (typeof viewCategory != "undefined") {
    if (viewCategory != "all") {
      for (var i = 0; i < posts.length; i++) {
        var postCat = posts[i].categories.map(v => v.toLowerCase());
        if (postCat.includes(viewCategory)) {
          finalPosts.push(posts[i]);
        }
      }
    } else {
      finalPosts = posts;
    }
  } else {
    finalPosts = posts;
  }

  let imageUrl;
</script>

<style>
  .post-image {
    max-height: 150px;
    text-align: center;
    overflow: hidden;
    margin-top: 1rem;
  }
  :global(.post-image img) {
    position: absolute;
    /* left: 50%; */
    /* top: 50%; */
    transform: translate(0%, -21%);
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Row>
  <Col>
    <h1 class="display-4 text-center">Recent posts</h1>
  </Col>
</Row>

{#each finalPosts as post}
  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

  <div class="row my-3">
    <div class="col-md-3 post-image">

      <Image alt="recipe" src={post.image == '' ? 'piggy.png' : post.image} />

    </div>
    <div class="col-md-8">
      <a rel="prefetch" href="recipes/{post.slug}">{post.title}</a>
      <div class="row">
        <div class="col">{post.date.split('T')[0]}</div>
      </div>
      <div class="row">
        <div class="col">
          <a rel="prefetch" href="authors/{post.author[1].toLowerCase()}">
            {post.author[0]}
          </a>
        </div>
        <div class="col-md-6">
          <span class="float-md-right">
            {#if post.categories.length > 1}Categories:{:else}Category:{/if}
            {#each post.categories as cat}
              <a rel="external" href="/recipes?category={cat.toLowerCase()}">
                {@html cat.trim()}
              </a>
            {/each}
          </span>
        </div>
      </div>
      <p>
        <!-- {post.date} -->
        {@html post.short}
        <a rel="prefetch" href="recipes/{post.slug}">Read More</a>
      </p>
    </div>
  </div>
{/each}
