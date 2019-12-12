<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
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
  let authorSlug = post.author[1];
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
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
          <a href="/recipes/categories/{cat}">
            {@html cat}
          </a>
        {/each}

      </span>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 text-center">
      <a href="/author/{authorSlug}">
        <span class="float-md-left">{author}</span>
      </a>
    </div>
  </div>
  <p />

  {@html post.html}
</div>
