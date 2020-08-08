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

  let author = post.author[0];
  let authorSlug = post.author[1].toLowerCase();
  import Col from "sveltestrap/src/Col.svelte";
  import Row from "sveltestrap/src/Row.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import Share from "../../components/Share.svelte";
  import Image from "svelte-image";

  import { onMount } from "svelte";

  let imageUrl = post.picture;

  let url;

  onMount(async () => {
    url = window.location.href;
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

<div class="content">
  <div class="row mb-5">
    <div class="col">
      <Button outline {color} href="/recipes">Back to recipes</Button>
    </div>
    <Share
      {url}
      title={post.title}
      desc={'A recipe I found on QWQE called ' + post.title} />
  </div>
  <div class="row">
    <div class="col">
      <h1 class="title-name">{post.title}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 text-center">
      <span class="float-md-left">
        {@html post.date.substring(0, post.date.indexOf('T'))}
      </span>
    </div>
    <div class="col-md-6 text-center">
      <span class="float-md-right">
        Categories:
        {#each post.categories as cat}
          <a href="/recipes?category={cat.toLowerCase()}">
            {@html cat}
          </a>
        {/each}

      </span>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 text-center">
      <a href="/authors/{authorSlug}">
        <span class="float-md-left">{author}</span>
      </a>
    </div>
  </div>
  <p />
  <Row>
    {#if post.picture != ''}
      <Col md="6" class="recipe-content">
        {@html post.html}
      </Col>

      <Col md="6">
        <Image src={imageUrl} alt="" class="img-fluid" />
      </Col>
    {:else}
      <Col md="12" class="recipe-content">
        {@html post.html}
      </Col>
    {/if}

  </Row>
</div>
