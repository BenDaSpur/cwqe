<script>
  const fs = require("fs");
  const matter = require("gray-matter");
  const marked = require("marked");
  const hljs = require("highlight.js");
  const path = require("path");
  const cwd = process.cwd();

  const file = fs.readFileSync(path.join(cwd, "posts/homepage.md"));
  const { data, content } = matter(file);
  let html = marked(content.replace(/^\t{3}/gm, ""));
</script>

<svelte:head>
  <title>Tiana Makes &amp; Bakes</title>
</svelte:head>
{@html html}
<!-- <h1>Tiana Makes &amp; Bakes</h1> -->
