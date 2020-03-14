// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
const path = require("path");
import getMarkDowninDirectory from "./_getposts.js";
// const getMarkDowninDirectory = require("./_getposts.js");
const cwd = process.cwd();

const posts = getMarkDowninDirectory(path.join(cwd, "posts/"));
posts.forEach(post => {
  // console.log(post.categories);
  if (post.author != undefined) {
    post.author[1] = post.author[0].replace(" ", "-");
  }
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
