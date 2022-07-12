"use strict";

const btnCollapse = document.querySelectorAll(".btn-collapse");

btnCollapse.forEach((i) => {
   i.addEventListener("click", function (e) {
      if (
         !e.target.classList.contains("open-btn") &&
         !e.target.classList.contains("close-btn")
      )
         return;

      const contentBody =
         e.target.parentNode.parentNode.parentNode.querySelector(
            ".collapse-body"
         );

      contentBody.classList.toggle("hidden");
      e.target.parentNode
         .querySelector(".close-btn")
         .classList.toggle("hidden");
      e.target.parentNode.querySelector(".open-btn").classList.toggle("hidden");
   });
});
