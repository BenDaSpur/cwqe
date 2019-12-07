<script>
  import Nav from "../components/Nav.svelte";
  import Container from "sveltestrap/src/Container.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<Container class="my-5">
  <slot />
</Container>
