import * as sapper from "@sapper/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "quill";

sapper.start({
  target: document.querySelector("#sapper")
});
