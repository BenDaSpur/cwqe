<script>
    import {
        Button,
        Nav,
        Navbar,
        NavItem,
        NavLink,
        NavbarBrand,
        NavbarToggler,
        Collapse,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<style>
    :global(.icon) {
        width: 32px;
        height: 32px;
    }
</style>

<Navbar color="dark" dark expand="md">
    <NavbarBrand rel="prefetch" href="/">Cooking with QE</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ml-auto" navbar>
            <NavItem>
                <NavLink
                    rel="prefetch"
                    target="_blank"
                    href="https://github.com/BenDaSpur/cwqe"
                    class="icon">
                    <FaGithub />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink rel="prefetch" href="authors">Authors</NavLink>
            </NavItem>
            <!-- <NavItem>
        <NavLink href="/recipes">Recipes</NavLink>
      </NavItem> -->
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Recipes</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem
                        class="text-dark"
                        onclick="location.href='/recipes?category=technical'">
                        Technical
                    </DropdownItem>
                    <DropdownItem
                        class="text-dark"
                        onclick="location.href='/recipes?category=food'">
                        Food
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        class="text-dark"
                        onclick="location.href='/recipes?category=all'">
                        All
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    </Collapse>
</Navbar>
