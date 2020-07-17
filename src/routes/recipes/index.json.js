import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      categories: post.categories,
      date: new Date(post.date),
      author: post.author,
      short: post.html.substr(0, 280).replace(/<[^>]*>?/gm, ""),
      image: post.picture,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
