fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log("User:", user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then((res) => res.json())
  .then((posts) => {
    console.log("User's posts:", posts.length);
  })
  .catch((err) => {
    console.log("❌ Error:", err);
  });