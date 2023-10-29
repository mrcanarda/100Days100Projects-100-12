"use strict";

const features = document.querySelector(".features");
const icon__arrow__down__features = document.querySelector(
  ".icon__arrow__down__features"
);
const icon__arrow__up__features = document.querySelector(
  ".icon__arrow__up__features "
);
const todolist = document.querySelector(".todolist");

const company = document.querySelector(".company");
const icon__arrow__down__company = document.querySelector(
  ".icon__arrow__down__company"
);
const icon__arrow__up__company = document.querySelector(
  ".icon__arrow__up__company"
);
const history = document.querySelector(".history");
//

features.addEventListener("click", function (e) {
  e.preventDefault();
  icon__arrow__up__features.classList.remove("hidden");
  icon__arrow__down__features.classList.add("hidden");
  todolist.classList.remove("hidden");

  features.addEventListener("click", function (e) {
    e.preventDefault();
    icon__arrow__up__features.classList.add("hidden");
    icon__arrow__down__features.classList.remove("hidden");
    todolist.classList.add("hidden");
  });
});

for (let i = 0; i < features.length; i++);

company.addEventListener("click", function (e) {
  e.preventDefault();
  icon__arrow__down__company.classList.add("hidden");
  icon__arrow__up__company.classList.remove("hidden");
  history.classList.remove("hidden");

  company.addEventListener("click", function (e) {
    e.preventDefault();
    icon__arrow__up__features.classList.add("hidden");
    icon__arrow__down__features.classList.remove("hidden");
    history.classList.add("hidden");
  });
});
