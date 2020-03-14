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
  export let posts;
  //sorted from new to old
  const sortedPosts = posts.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  // console.log(sortedPosts);
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
  {#each sortedPosts as post}
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
      </div>
      <p>
        <!-- {post.date} -->
        {@html post.short}
        <a rel="prefetch" href="recipes/{post.slug}">Read More</a>
      </p>
    </li>
  {/each}
</ul>
