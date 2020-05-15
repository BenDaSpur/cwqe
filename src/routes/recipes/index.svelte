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
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each finalPosts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
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
        <div class="col-md-6 text-center">
          <span class="float-md-right">
            {#if post.categories.length > 1}Categories:{:else}Category:{/if}
            {#each post.categories as cat}
              <a href="/recipes?category={cat.toLowerCase()}">
                {@html cat}
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
    </li>
  {/each}
</ul>
