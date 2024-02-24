"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  // document.querySelectorAll(".modal").classList.remove("hidden");
  modal.classList.remove("hidden");
  // document.querySelectorAll(".overlay").classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  // document.querySelectorAll(".modal").classList.add("hidden");
  modal.classList.add("hidden");
  // document.querySelectorAll(".overlay").classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // document.querySelectorAll(".modal").addEventListener("click", openModal);
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
