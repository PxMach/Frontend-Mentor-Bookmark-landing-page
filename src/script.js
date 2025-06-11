const topnavOpen = document.querySelector(".topnav_open");
const topnavClose = document.querySelector(".topnav_close");
const topnavMenu = document.querySelector(".topnav_menu");
const topHeadBookmark = document.querySelector(".tophead_bookmark");

const titleQuestions = document.querySelectorAll(".title-question");
const arrowDown = document.querySelectorAll(".arrow-down");
const reponses = document.querySelectorAll(".reponse");

let currentSlide = 1;

const firstBtn = document.querySelector(".first-btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
const title_change = document.querySelector(".title_change");
const para = document.querySelector(".para");
const slides = [
   {
      title: "Bookmark in one click",
      paragraph: `Organize your bookmarks however you like. Our simple
                     drag-and-drop interface gives you complete control over how
                     you manage your favourite sites.
                  `,
   },
   {
      title: "Intelligent search",
      paragraph: ` Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.`,
   },
   {
      title: "Share your bookmarks",
      paragraph: ` Easily share your bookmarks and collections with others.
               Create a shareable link that you can send at the click of a
                  button.`,
   },
];

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

function updateSlide() {
   title_change.textContent = slides[currentSlide - 1].title;
   para.textContent = slides[currentSlide - 1].paragraph;
}
firstBtn.addEventListener("click", () => {
   currentSlide = 1;
   updateSlide();
});
secondBtn.addEventListener("click", () => {
   currentSlide = 2;
   updateSlide();
});
thirdBtn.addEventListener("click", () => {
   currentSlide = 3;
   updateSlide();
});

titleQuestions.forEach((titleQuestion) => {
   titleQuestion.addEventListener("click", () => {
      // Trouver le conteneur parent de la question
      const questionContent = titleQuestion.closest(".questions-content");
      // Trouver la réponse dans ce conteneur
      const reponse = questionContent.querySelector(".reponse");

      // Fermer toutes les autres réponses
      reponses.forEach((r) => {
         if (r !== reponse) {
            r.style.display = "none";
         }
      });

      // Basculer l'affichage de la réponse cliquée
      reponse.style.display =
         reponse.style.display === "flex" ? "none" : "flex";
   });
});
