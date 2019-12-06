<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`authors.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Col from "sveltestrap/src/Col.svelte";
  import Row from "sveltestrap/src/Row.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div>
  <h1>Our Authors</h1>
</div>
<Row>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <Col>
      <a rel="prefetch" href="authors/{post.slug}">{post.title}</a>
      <p>
        {@html post.short}
      </p>
    </Col>
  {/each}
</Row>
