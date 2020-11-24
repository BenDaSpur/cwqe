<script>
    import Nav from "../components/Nav.svelte";
    import Container from "sveltestrap/src/Container.svelte";
    import Row from "sveltestrap/src/Row.svelte";
</script>

<style>
</style>

<Nav />

<Container class="my-5">
    <slot />
</Container>
