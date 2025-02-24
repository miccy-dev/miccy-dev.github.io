document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
  toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Check for saved user preference, if any, on load of the website
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Save the user preference in local storage
  toggleDarkModeButton.addEventListener("click", () => {
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
  });
});
