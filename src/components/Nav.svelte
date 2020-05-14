<script>
  // export let segment;
  import Button from "sveltestrap/src/Button.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavItem from "sveltestrap/src/NavItem.svelte";
  import NavLink from "sveltestrap/src/NavLink.svelte";
  import Container from "sveltestrap/src/Container.svelte";
  import NavbarBrand from "sveltestrap/src/NavbarBrand.svelte";
  import NavbarToggler from "sveltestrap/src/NavbarToggler.svelte";
  import Collapse from "sveltestrap/src/Collapse.svelte";
  import UncontrolledDropdown from "sveltestrap/src/UncontrolledDropdown.svelte";
  import DropdownToggle from "sveltestrap/src/DropdownToggle.svelte";
  import DropdownMenu from "sveltestrap/src/DropdownMenu.svelte";
  import DropdownItem from "sveltestrap/src/DropdownItem.svelte";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<style>

</style>

<Navbar color="dark" dark expand="md">
  <NavbarBrand rel="prefetch" href="/">Cooking with QE</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink rel="prefetch" href="authors">Authors</NavLink>
      </NavItem>
      <!-- <NavItem>
        <NavLink href="/recipes">Recipes</NavLink>
      </NavItem> -->
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>Recipes</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem rel="preload" href="/recipes?category=technical">
            Technical
          </DropdownItem>
          <DropdownItem rel="preload" href="/recipes?category=food">
            Food
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem rel="preload" href="/recipes?category=all">
            All
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Collapse>
</Navbar>
