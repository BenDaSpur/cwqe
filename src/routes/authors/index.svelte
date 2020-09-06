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
  import {
    Col,
    Row,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle
  } from "sveltestrap";
  const color = "primary";
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
    <Col md={12} lg={6} xl={3}>
      <Card class="mb-3">
        <CardHeader>
          <a rel="prefetch" href="authors/{post.slug}">{post.title}</a>
        </CardHeader>
        <CardBody>
          <CardSubtitle />
          <CardImg
            src={post.img}
            class="thumbnail center-block img-fluid"
            style="max-height:300px; width: inherit !important;" />
          <CardText>
            {@html post.short}
          </CardText>
          <!-- <Button>Button</Button> -->
        </CardBody>
        <CardFooter>
          <Button {color} rel="prefetch" href="authors/{post.slug}">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </Col>
  {/each}
</Row>
