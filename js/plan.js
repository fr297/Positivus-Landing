"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const item = e.target.closest(".accordion-item");
      item.classList.toggle("accordion-item-active");
    });
  });
});
