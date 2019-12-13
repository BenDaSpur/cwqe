<script>
  export let segment;
  import Button from "sveltestrap/src/Button.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavItem from "sveltestrap/src/NavItem.svelte";
  import NavLink from "sveltestrap/src/NavLink.svelte";
  import Container from "sveltestrap/src/Container.svelte";
</script>

<style>

</style>

<Navbar color="dark" dark>
  <Nav centered>
    <NavItem>
      <NavLink class={segment === undefined ? 'active' : ''} href="/">
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink class={segment === 'about' ? 'active' : ''} href="about">
        About
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink class={segment === 'authors' ? 'active' : ''} href="authors">
        Authors
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink class={segment === 'recipes' ? 'active' : ''} href="recipes">
        Recipes
      </NavLink>
    </NavItem>
  </Nav>
</Navbar>
