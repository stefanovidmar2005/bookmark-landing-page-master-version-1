"use strict";
const openModal1 = document.querySelector(".openModal1");
const openModal2 = document.querySelector(".openModal2");
const openModal3 = document.querySelector(".openModal3");
const openModal4 = document.querySelector(".openModal4");
const images1 = document.querySelector(".thisImg1");
const images2 = document.querySelector(".thisImg2");
const images3 = document.querySelector(".thisImg3");
const images4 = document.querySelector(".thisImg4");
const showText1 = document.querySelector(".hiddentext1");
const showText2 = document.querySelector(".hiddentext2");
const showText3 = document.querySelector(".hiddentext3");
const showText4 = document.querySelector(".hiddentext4");

openModal1.addEventListener("click", function () {
  images1.classList.toggle("img__color");
  images1.src = "/images/icon-arrow.svg";
  showText1.classList.toggle("hiddentext1");
});
openModal2.addEventListener("click", function () {
  images2.classList.toggle("img__color");
  images2.src = "/images/icon-arrow.svg";
  showText2.classList.toggle("hiddentext2");
});
openModal3.addEventListener("click", function () {
  images3.classList.toggle("img__color");
  images3.src = "/images/icon-arrow.svg";
  showText3.classList.toggle("hiddentext3");
});
openModal4.addEventListener("click", function () {
  images4.classList.toggle("img__color");
  images4.src = "/images/icon-arrow.svg";
  showText4.classList.toggle("hiddentext4");
});
