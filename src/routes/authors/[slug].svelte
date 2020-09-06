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
  import { Col, Row, Button } from "sveltestrap";
  import Image from "svelte-image";
  const color = "primary";
</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Button outline {color} href="/authors">Back to authors</Button>

<h1 class="display-3">{post.title}</h1>

<div class="content">
  <Row>
    <Col md="6">
      {@html post.html}
    </Col>
    {#if post.picture != ''}
      <Col md="6">
        <Image alt="author" src={post.picture} />
      </Col>
    {/if}

  </Row>
</div>
