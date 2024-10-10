var foodTypePasti = document.getElementById("food-type-pasti");
var foodTypeMerenda = document.getElementById("food-type-merenda");
var underbarPasti = document.getElementById("underbar-pasti");
var underbarMerenda = document.getElementById("underbar-merenda");

var daySelectorContainer = document.getElementById("day-selector-container");
var daysContainer = document.getElementById("days-container");
var daySelector = document.getElementById("day-selector");

/* days */
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var day7 = document.getElementById("day7");
var day8 = document.getElementById("day8");
var day9 = document.getElementById("day9");
var day10 = document.getElementById("day10");
var days = document.getElementsByClassName("day");

var wrapper = document.getElementById("wrapper");

var faChevronDown = document.getElementById("fa-chevron-down");

var foodBottomSelector = document.querySelectorAll(".bottom-selector");
var foodBottomIcon = document.querySelectorAll(".food-bottom-icon");

/* cards container days */

var containerDay1 = document.getElementById("cards-container-day1");
var containerDay2 = document.getElementById("cards-container-day2");
var containerDay3 = document.getElementById("cards-container-day3");
var containerDay4 = document.getElementById("cards-container-day4");
var containerDay5 = document.getElementById("cards-container-day5");
var containerDay6 = document.getElementById("cards-container-day6");
var containerDay7 = document.getElementById("cards-container-day7");
var containerDay8 = document.getElementById("cards-container-day8");
var containerDay9 = document.getElementById("cards-container-day9");
var containerDay10 = document.getElementById("cards-container-day10");

/* FUNCTIONS */

function hideContainer(container, foodType) {
  let cards = container.querySelectorAll(foodType);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("hide");
  }
  container.classList.remove("hide");
}

function closeDaySelector() {
  daysContainer.classList.add("hide");
  daysContainer.classList.remove("show");
  wrapper.classList.remove("hide");
  faChevronDown.classList.remove("rotate");
}

function openDaySelector() {
  daysContainer.classList.add("show");
  daysContainer.classList.remove("hide");
  wrapper.classList.add("hide");
  faChevronDown.classList.add("rotate");
}

function deActiveAllDay() {
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove("active");
  }
}

function activeDay(dayToActive) {
  dayToActive.classList.add("active");
}

function dayTypeFood() {
  var daySelectorText = daySelector.innerText;
  /* check iniziale */
  if (
    daySelectorText != "Seleziona giorno" &&
    underbarPasti.classList.contains("underbar-activated") &&
    (foodBottomSelector[0].classList.contains("bottom-selector-selected") ||
      foodBottomSelector[1].classList.contains("bottom-selector-selected") ||
      foodBottomSelector[2].classList.contains("bottom-selector-selected"))
  ) {
    /* GIORNO X / PASTI / # PRANZO # */
    if (foodBottomSelector[0].classList.contains("bottom-selector-selected")) {
      let foodType = ".pranzo";
      if (daySelectorText == "Giorno 1") {
        hideContainer(containerDay1, foodType);
      } else if (daySelectorText == "Giorno 2") {
        hideContainer(containerDay2, foodType);
      } else if (daySelectorText == "Giorno 3") {
        hideContainer(containerDay3, foodType);
      } else if (daySelectorText == "Giorno 4") {
        hideContainer(containerDay4, foodType);
      } else if (daySelectorText == "Giorno 5") {
        hideContainer(containerDay5, foodType);
      } else if (daySelectorText == "Giorno 6") {
        hideContainer(containerDay6, foodType);
      } else if (daySelectorText == "Giorno 7") {
        hideContainer(containerDay7, foodType);
      } else if (daySelectorText == "Giorno 8") {
        hideContainer(containerDay8, foodType);
      } else if (daySelectorText == "Giorno 9") {
        hideContainer(containerDay9, foodType);
      } else if (daySelectorText == "Giorno 10") {
        hideContainer(containerDay10, foodType);
      }
    }

    /* GIORNO X / PASTI / # CENA # */
    if (foodBottomSelector[1].classList.contains("bottom-selector-selected")) {
      let foodType = ".cena";
      if (daySelectorText == "Giorno 1") {
        hideContainer(containerDay1, foodType);
      } else if (daySelectorText == "Giorno 2") {
        hideContainer(containerDay2, foodType);
      } else if (daySelectorText == "Giorno 3") {
        hideContainer(containerDay3, foodType);
      } else if (daySelectorText == "Giorno 4") {
        hideContainer(containerDay4, foodType);
      } else if (daySelectorText == "Giorno 5") {
        hideContainer(containerDay5, foodType);
      } else if (daySelectorText == "Giorno 6") {
        hideContainer(containerDay6, foodType);
      } else if (daySelectorText == "Giorno 7") {
        hideContainer(containerDay7, foodType);
      } else if (daySelectorText == "Giorno 8") {
        hideContainer(containerDay8, foodType);
      } else if (daySelectorText == "Giorno 9") {
        hideContainer(containerDay9, foodType);
      } else if (daySelectorText == "Giorno 10") {
        hideContainer(containerDay10, foodType);
      }
    }
    /* GIORNO X / PASTI / # COLAZIONE # */
    if (foodBottomSelector[2].classList.contains("bottom-selector-selected")) {
      let foodType = ".colazione";
      if (daySelectorText == "Giorno 1") {
        hideContainer(containerDay1, foodType);
      } else if (daySelectorText == "Giorno 2") {
        hideContainer(containerDay2, foodType);
      } else if (daySelectorText == "Giorno 3") {
        hideContainer(containerDay3, foodType);
      } else if (daySelectorText == "Giorno 4") {
        hideContainer(containerDay4, foodType);
      } else if (daySelectorText == "Giorno 5") {
        hideContainer(containerDay5, foodType);
      } else if (daySelectorText == "Giorno 6") {
        hideContainer(containerDay6, foodType);
      } else if (daySelectorText == "Giorno 7") {
        hideContainer(containerDay7, foodType);
      } else if (daySelectorText == "Giorno 8") {
        hideContainer(containerDay8, foodType);
      } else if (daySelectorText == "Giorno 9") {
        hideContainer(containerDay9, foodType);
      } else if (daySelectorText == "Giorno 10") {
        hideContainer(containerDay10, foodType);
      }
    }
  }
}

/* LISTENER */

foodTypePasti.addEventListener("click", function () {
  underbarMerenda.classList.remove("underbar-activated");
  underbarPasti.classList.add("underbar-activated");
});

foodTypeMerenda.addEventListener("click", function () {
  underbarPasti.classList.remove("underbar-activated");
  underbarMerenda.classList.add("underbar-activated");
});

/* pranzo bottom selector */
foodBottomSelector[0].addEventListener("click", function () {
  foodBottomSelector[1].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.remove("bottom-selector-selected");
  foodBottomSelector[0].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.add("i-white");
  foodBottomIcon[1].classList.remove("i-white");
  foodBottomIcon[2].classList.remove("i-white");
  dayTypeFood();
});

/* cena bottom selector */

foodBottomSelector[1].addEventListener("click", function () {
  foodBottomSelector[0].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.remove("bottom-selector-selected");
  foodBottomSelector[1].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.remove("i-white");
  foodBottomIcon[1].classList.add("i-white");
  foodBottomIcon[2].classList.remove("i-white");
  dayTypeFood();
});

/* colazione bottom selector */

foodBottomSelector[2].addEventListener("click", function () {
  foodBottomSelector[0].classList.remove("bottom-selector-selected");
  foodBottomSelector[1].classList.remove("bottom-selector-selected");
  foodBottomSelector[2].classList.add("bottom-selector-selected");
  foodBottomIcon[0].classList.remove("i-white");
  foodBottomIcon[1].classList.remove("i-white");
  foodBottomIcon[2].classList.add("i-white");
  dayTypeFood();
});

/* days container display block */

daySelectorContainer.addEventListener("click", function () {
  if (daysContainer.classList.contains("hide")) {
    openDaySelector();
  } else {
    closeDaySelector();
  }
});

/* day */

day1.addEventListener("click", function () {
  daySelector.textContent = "Giorno 1";
  deActiveAllDay();
  activeDay(day1);
  closeDaySelector();
});

day2.addEventListener("click", function () {
  daySelector.textContent = "Giorno 2";
  deActiveAllDay();
  activeDay(day2);
  closeDaySelector();
});

day3.addEventListener("click", function () {
  daySelector.textContent = "Giorno 3";
  deActiveAllDay();
  activeDay(day3);
  closeDaySelector();
});

day4.addEventListener("click", function () {
  daySelector.textContent = "Giorno 4";
  deActiveAllDay();
  activeDay(day4);
  closeDaySelector();
});

day5.addEventListener("click", function () {
  daySelector.textContent = "Giorno 5";
  deActiveAllDay();
  activeDay(day5);
  closeDaySelector();
});

day6.addEventListener("click", function () {
  daySelector.textContent = "Giorno 6";
  deActiveAllDay();
  activeDay(day6);
  closeDaySelector();
});

day7.addEventListener("click", function () {
  daySelector.textContent = "Giorno 7";
  deActiveAllDay();
  activeDay(day7);
  closeDaySelector();
});

day8.addEventListener("click", function () {
  daySelector.textContent = "Giorno 8";
  deActiveAllDay();
  activeDay(day8);
  closeDaySelector();
});

day9.addEventListener("click", function () {
  daySelector.textContent = "Giorno 9";
  deActiveAllDay();
  activeDay(day9);
  closeDaySelector();
});

day10.addEventListener("click", function () {
  daySelector.textContent = "Giorno 10";
  deActiveAllDay();
  activeDay(day10);
  closeDaySelector();
});
