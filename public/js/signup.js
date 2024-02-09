const signUpHandler = async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      }
    } else {
      alert("Failed to create account");
    }
  }
};

document.querySelector("#submit").addEventListener("click", signUpHandler);
