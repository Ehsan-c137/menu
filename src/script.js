"use strict";

const btnCollapse = document.querySelectorAll(".btn-collapse");

// btn
btnCollapse.forEach((i) => {
   i.addEventListener("click", function (e) {
      if (
         !e.target.classList.contains("open-btn") &&
         !e.target.classList.contains("close-btn")
      )
         return;

      const accordionContent =
         e.target.parentNode.parentNode.parentNode.querySelector(
            ".collapse-body"
         );
      let accordionMaxHeight = accordionContent.style.maxHeight;

      // Condition handling
      if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
         accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
         }px`;
         accordionContent.style.visibility = "visible";
      } else {
         accordionContent.style.maxHeight = `0px`;
         accordionContent.style.visibility = "hidden";
      }
      // open-close btn
      e.target.parentNode
         .querySelector(".close-btn")
         .classList.toggle("hidden");
      e.target.parentNode.querySelector(".open-btn").classList.toggle("hidden");
   });
});

// range slider
const rangeSlider = document.querySelector("#range-slider");

rangeSlider.addEventListener("input", function () {
   const value = this.value;
   this.style.background = `linear-gradient(to right, #21977b 0%, #1ca27f ${value}%, #fff ${value}%, white 100%)`;
});
