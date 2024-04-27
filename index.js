const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.target.setAttribute("selected", "true");
  });
});
