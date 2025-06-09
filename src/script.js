const topnavOpen = document.querySelector(".topnav_open");
const topnavClose = document.querySelector(".topnav_close");
const topnavMenu = document.querySelector(".topnav_menu");
const topHeadBookmark = document.querySelector(".tophead_bookmark");

topnavOpen.addEventListener("click", () => {
   topnavMenu.style.display = "flex";
   topnavOpen.style.display = "none";
   topHeadBookmark.style.display = "none";
});
topnavClose.addEventListener("click", () => {
   topnavMenu.style.display = "none";
   topnavOpen.style.display = "block";
   topHeadBookmark.style.display = "block";
});
