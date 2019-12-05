const fs = require("fs");
const matter = require("gray-matter");
const marked = require("marked");
const hljs = require("highlight.js");

marked.setOptions({
  highlight: function(code, lang) {
    if (lang) {
      return hljs.highlight(lang, code).value;
    } else {
      return code;
    }
  }
});

module.exports = function getMarkdownInDirectory(path) {
  return fs
    .readdirSync(path)
    .filter(filename => /\.md$/.test(filename))
    .map(filename => getMarkdownFromFile(path, filename));
};

function getMarkdownFromFile(path, filename) {
  const file = fs.readFileSync(`${path}${filename}`);
  const { data, content } = matter(file);

  const slug = filename.split(".")[0];
  const html = marked(content);

  return {
    ...data,
    slug,
    html
  };
}
