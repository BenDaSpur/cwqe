<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // console.log(params);
    const res = await this.fetch(`recipes/${params.slug}.json`);
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
  let author;
  let authorSlug;

  if (post.author !== null) {
    author = post.author[0];
    authorSlug = post.author[1].toLowerCase();
  } else {
    author = "Unknown";
  }

  import { Col, Row, Button } from "sveltestrap";
  import Share from "../../components/Share.svelte";
  import Image from "svelte-image";

  import { onMount } from "svelte";

  let imageUrl = post.picture;

  let url;

  onMount(async () => {
    url = window.location.href;

    var aHref = document.querySelector(".recipe-content a");
    if (aHref != null) {
      aHref.setAttribute("rel", "external");
    }
  });

  // export let url = window.location.href;
  const color = "primary";
</script>

<style>
  .title-name {
    text-transform: capitalize;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Row>
  <Col>
    <Button outline {color} href="/recipes">Back to recipes</Button>
  </Col>
  <!-- Share container -->
  <Col md={6} class="mt-1">
    <Share
      {url}
      title={post.title}
      desc={'A recipe I found on QWQE called ' + post.title} />
  </Col>
</Row>
<!-- Post title -->
<Row class="my-4">
  <Col>
    <h1 class="title-name display-4">{post.title}</h1>
  </Col>
</Row>
<!-- Post Date -->
<Row>
  <Col md={6} class="text-left">
    <span class="float-md-left">
      {@html post.date.substring(0, post.date.indexOf('T'))}
    </span>
  </Col>
  <!-- Post categories -->
  <Col md={6} class="text-left">
    <span class="float-md-right">
      Categories:
      {#each post.categories as cat}
        <a href="/recipes?category={cat.toLowerCase()}">
          {@html cat}
        </a>
      {/each}
    </span>
  </Col>
</Row>
<!-- Post Author -->
<Row>
  <Col md={6} class="text-left">
    {#if author != 'Unknown'}
      <a href="/authors/{authorSlug}">
        <span class="float-md-left">{author}</span>
      </a>
    {:else}Unknown{/if}
  </Col>
</Row>
<Row class="mt-3">
  {#if post.picture != ''}
    <Col md="6" class="recipe-content bg-light p-4">
      {@html post.html}
    </Col>

    <!-- Post Main Picture -->
    <Col md="6">
      <Image src={imageUrl} alt="" class="img-fluid" />
    </Col>
  {:else}
    <Col md="12" class="recipe-content bg-light p-4">
      {@html post.html}
    </Col>
  {/if}
</Row>
