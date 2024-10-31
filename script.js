// * GET HTML ELEMENTS
const daysContainer = document.getElementById("days-container");
const wrapper = document.getElementById("wrapper");
const daysButton = document.getElementById("day-selector-container");
const chevron = document.getElementById("fa-chevron-down");
const upperFoodTypesSelector = document.querySelectorAll(".food-type");
const underbarPasti = document.getElementById("underbar-pasti");
const underbarMerenda = document.getElementById("underbar-merenda");

// * FUNCTION DECLARATIONS
const hideWrapper = () => {
  wrapper.classList.add("hide");
};

const showWrapper = () => {
  wrapper.classList.remove("hide");
};

const printDays = () => {
  let daysHtml = "";
  for (let i = 0; i < 10; i++) {
    daysHtml += `<span class="day" id="day${i + 1}">Giorno ${i + 1}</span>`;
  }
  daysContainer.innerHTML = daysHtml;
};

const rotateChevron = () => {
  chevron.classList.toggle("rotate");
};

const setDefaultConfig = () => {
  upperFoodType = "Pasti";
  underbarPasti.classList.add("activated");
};

// * VARIABLES DECLARATIONS
let isDaysShowed = false;
let upperFoodType = "";

// * LISTENER
daysButton.addEventListener("click", () => {
  if (!isDaysShowed) {
    daysContainer.classList.add("show");
    daysContainer.classList.remove("hide");
    rotateChevron();
    hideWrapper();
    isDaysShowed = true;
  } else {
    daysContainer.classList.add("hide");
    daysContainer.classList.remove("show");
    rotateChevron();
    showWrapper();
    isDaysShowed = false;
  }
});

upperFoodTypesSelector.forEach((foodType, index) => {
  foodType.addEventListener("click", () => {
    if (index == 0) {
      underbarPasti.classList.add("activated");
      underbarMerenda.classList.remove("activated");
      upperFoodType = "Pasti";
    } else {
      underbarPasti.classList.remove("activated");
      underbarMerenda.classList.add("activated");
      upperFoodType = "Merenda";
    }
  });
});

// * EXCECUTE
printDays();
setDefaultConfig();
