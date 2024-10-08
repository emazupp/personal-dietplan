let foodTypePasti = document.getElementById("food-type-pasti");
let foodTypeMerenda = document.getElementById("food-type-merenda");
let underbarPasti = document.getElementById("underbar-pasti");
let underbarMerenda = document.getElementById("underbar-merenda");
let daysContainer = document.getElementById("days-container");
let daySelector = document.getElementById("day-selector");
let wrapper = document.getElementById("wrapper");
let foodBottomSelector = document.querySelectorAll(".bottom-selector");
let foodBottomIcon = document.querySelectorAll(".food-bottom-icon");

foodTypePasti.addEventListener("click", function () {
  underbarMerenda.classList.remove("underbar-activated");
  underbarPasti.classList.add("underbar-activated");
});

foodTypeMerenda.addEventListener("click", function () {
  underbarPasti.classList.remove("underbar-activated");
  underbarMerenda.classList.add("underbar-activated");
});

/* first bottom selector */
foodBottomSelector[0].addEventListener("click", function () {
  foodBottomSelector[1].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.remove("bottom-selector-selected");
  foodBottomSelector[0].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.add("i-white");
  foodBottomIcon[1].classList.remove("i-white");
  foodBottomIcon[2].classList.remove("i-white");
});

/* second bottom selector */

foodBottomSelector[1].addEventListener("click", function () {
  foodBottomSelector[0].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.remove("bottom-selector-selected");
  foodBottomSelector[1].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.remove("i-white");
  foodBottomIcon[1].classList.add("i-white");
  foodBottomIcon[2].classList.remove("i-white");
});

/* third bottom selector */

foodBottomSelector[2].addEventListener("click", function () {
  foodBottomSelector[0].classList.remove("bottom-selector-selected");
  foodBottomSelector[1].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.remove("i-white");
  foodBottomIcon[1].classList.remove("i-white");
  foodBottomIcon[2].classList.add("i-white");
});

/* days container display block */

daySelector.addEventListener("click", function () {
  if (daysContainer.classList.contains("hide")) {
    daysContainer.classList.add("show");
    daysContainer.classList.remove("hide");
    wrapper.classList.add("hide");
  } else {
    daysContainer.classList.add("hide");
    daysContainer.classList.remove("show");
    wrapper.classList.remove("hide");
  }
});
