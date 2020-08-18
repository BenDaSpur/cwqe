<script>
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
  import Image from "svelte-image";
  export let slug, image, author, title, categories;
  const image_src = image;
</script>

<style>
  :global(.card-img-top) {
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
  }
</style>

<Card class="mb-3">

  <Image src={image_src} alt="" class="card-img-top" height="250px" />

  <CardBody>
    <CardSubtitle>
      <a class="text-dark font-weight-bold" href="recipes/{slug}">
        <u>{title}</u>
      </a>
    </CardSubtitle>
    <CardText>
      <a href="authors/{author[1].toLowerCase()}">{author[0]}</a>
    </CardText>

    {#each categories as tag}
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
    <a class="btn btn-outline-primary" href="/recipes/{slug}">{title}</a>
  </CardFooter>
</Card>
