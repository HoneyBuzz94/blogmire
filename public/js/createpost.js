const createPostHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();

  if (title && text) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector("#submit").addEventListener("click", createPostHandler);
