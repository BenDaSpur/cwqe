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
  import Button from "sveltestrap/src/Button.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardImg from "sveltestrap/src/CardImg.svelte";
  import CardSubtitle from "sveltestrap/src/CardSubtitle.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";
  import CardTitle from "sveltestrap/src/CardTitle.svelte";
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
    <Card class="mb-3 col">
      <CardHeader>
        <a rel="prefetch" href="authors/{post.slug}">{post.title}</a>
      </CardHeader>
      <CardBody>
        <CardSubtitle />
        <CardImg
          src={post.img}
          class="thumbnail center-block img-responsive"
          style="max-height:300px; width: inherit !important;" />
        <CardText>
          {@html post.short}
        </CardText>
        <!-- <Button>Button</Button> -->
      </CardBody>
      <CardFooter>
        <Button rel="prefetch" href="authors/{post.slug}">Read More</Button>
      </CardFooter>
    </Card>
  {/each}
</Row>
