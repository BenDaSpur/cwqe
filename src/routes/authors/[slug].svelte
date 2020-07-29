<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`authors/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  import Col from "sveltestrap/src/Col.svelte";
  import Row from "sveltestrap/src/Row.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  const color = "primary";
</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Button outline {color} href="/authors">Back to authors</Button>

<h1>{post.title}</h1>

<div class="content">
  <Row>
    <Col md="6">
      {@html post.html}
    </Col>
    <Col md="6">
      <img
        alt="author"
        class="thumbnail center-block img-fluid"
        src={post.picture} />
    </Col>
  </Row>
</div>
