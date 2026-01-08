"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".planItemBtn"),
    content = document.querySelector(".hiddenContent"),
    hiddenBtn = document.querySelector(".hiddenBtn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      content.classList.add("openContent");
      btn.classList.add("hiddenBtn");
    });
  });

  hiddenBtn.addEventListener("click", () => {
    content.classList.remove("openContent");
    btn.classList.remove("hiddenBtn");
  });
});
