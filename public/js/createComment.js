const createCommentHandler = async (e) => {
  e.preventDefault();
  const target = e.target;
  console.log(target.previousElementSibling);

  const text = target.previousElementSibling.value;
  const post_id = target.previousElementSibling.id.replace('comment-', '');

  if (text && post_id) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create comment");
    }
  }
};

document.querySelectorAll(".comment-btn").forEach((button) => {
  button.addEventListener("click", createCommentHandler);
});
