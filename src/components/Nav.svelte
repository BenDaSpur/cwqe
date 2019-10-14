<script>
  export let segment;
</script>

<style>

</style>

<nav class="navbar navbar-expand-lg navbar-light indigo">
  <a class="navbar-brand" href=".">tiana makes &amp; bakes</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item {segment === undefined ? 'active' : ''}">
        <a class="nav-link" href=".">
          home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link {segment === 'about' ? 'active' : ''}" href="about">
          about
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link {segment === 'blog' ? 'active' : ''}" href="blog">
          blog
        </a>
      </li>
    </ul>
    <span class="navbar-text white-text">
      @tianaspurlock &nbsp; @thesnackqueenrd &nbsp; @tianamakesandbakes
    </span>
  </div>
</nav>
