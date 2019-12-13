<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`about.json`)
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

<Row>
  <Col>
    <h1>{posts[0].title}</h1>
  </Col>
</Row>

<Row>
  <Col>
    {@html posts[0].short}
  </Col>
</Row>
