import posts from "./_posts.js";

const lookup = new Map();
posts.forEach(post => {
  var cats = JSON.stringify(post.categories).split(",");

  cats.forEach(cat => {
    cat = cat
      .replace(/"/g, "")
      .replace("[", "")
      .replace("]", "");

    lookup.set(cat, JSON.stringify(post));
  });
  // lookup.set(, JSON.stringify(post));
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;
  console.log(lookup.has(slug));

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
