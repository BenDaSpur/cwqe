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
    CardTitle,
    Badge
  } from "sveltestrap/src/";

  const sortedPosts = posts.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  // console.log(sortedPosts);
</script>

<style>

</style>

<svelte:head>
  <title>Cooking With QE</title>
</svelte:head>

<Row>
  <Col />
</Row>

<Row>
  <Col md="3">
    <img class="img-fluid" src="piggy.png" alt="Mascot" />
  </Col>
  <Col>
    <h1 class="display-1">Cooking With QE</h1>

    <p>
      This site is dedicated to a simple idea. How can a few people spread
      quality recipes to others.
    </p>
    <p>
      What is a recipe? We like to think that it can be two things. One is a
      literal recipe for some food that we really enjoy, and the other is
      recipes for creating the best environment for quality engineers and the
      development team to thrive! So stay tuned because we have some really fun
      ideas of what we would love to share with you!
    </p>
  </Col>
</Row>

<Row>
  <Col>
    <h4 class="display-4">Latest Posts</h4>
  </Col>
</Row>
<Row>

  {#each sortedPosts as post}
    <Col md="3">
      <Card class="mb-3">
        <img src={post.image} alt="" class="card-img-top" />
        <CardBody>
          <CardSubtitle>
            <strong>{post.title}</strong>
          </CardSubtitle>
          <CardText>
            <a href="authors/{post.author[1].toLowerCase()}">
              {post.author[0]}
            </a>
          </CardText>
          <CardText>
            {@html post.short}
          </CardText>
          {#each post.categories as tag}
            <Badge
              class="mr-1"
              color="info"
              href="/recipes?category={tag.toLowerCase()}">
              {tag}
            </Badge>
          {/each}
          <Badge />
        </CardBody>
        <CardFooter>
          <a class="btn btn-outline-primary" href="/recipes/{post.slug}">
            {post.title}
          </a>
        </CardFooter>
      </Card>

    </Col>
  {/each}
</Row>
