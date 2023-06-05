window.addEventListener("load", () => {
    console.log("Page is fully loaded");
  });
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("open");
  console.log(menuBtn);
});