async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Post Title:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
