'use strict';

window.addEventListener("DOMContentLoaded", function() {
  let quote1 = document.querySelector(".quote1"),
    quote2 = document.querySelector(".quote2"),
    quote3 = document.querySelector(".quote3"),
    item1 = document.querySelector(".item1"),
    item2 = document.querySelector(".item2"),
    item3 = document.querySelector(".item3");

  item1.addEventListener("click", function() {
    quote1.style.opacity = "1";
    quote2.style.opacity = "0";
    quote3.style.opacity = "0";
  });

  item2.addEventListener("click", function() {
    quote1.style.opacity = "0";
    quote2.style.opacity = "1";
    quote3.style.opacity = "0";
  });

  item3.addEventListener("click", function() {
    quote1.style.opacity = "0";
    quote2.style.opacity = "0";
    quote3.style.opacity = "1";
  });
});