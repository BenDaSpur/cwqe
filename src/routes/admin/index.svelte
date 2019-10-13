<script>
  import { onMount } from "svelte";

  onMount(async () => {
    var container = document.getElementById("editor");
    var editor = new Quill(container);
  });
</script>

<div id="editor" />
