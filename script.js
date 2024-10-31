// * GET HTML ELEMENTS
const daysContainer = document.getElementById("days-container");
const wrapper = document.getElementById("wrapper");
const daysButton = document.getElementById("day-selector-container");
const chevron = document.getElementById("fa-chevron-down");
const upperFoodTypesSelector = document.querySelectorAll(".food-type");
const bottomFoodTypesSelector = document.querySelectorAll(".bottom-selector");
const dayShowed = document.getElementById("day-selector");

// * FUNCTION DECLARATIONS
const setDefaultConfig = (upperFoodTypeIndex, bottomFoodTypeIndex) => {
  upperFoodTypesSelector[upperFoodTypeIndex].childNodes[3].classList.add(
    "activated"
  );
  bottomFoodTypesSelector[bottomFoodTypeIndex].classList.add("selected");
  setDayShowed(dayIndex);
};

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
  return document.querySelectorAll(".day");
};

const rotateChevron = () => {
  chevron.classList.toggle("rotate");
};

const setBottomFoodTypeNotSelected = (index) => {
  for (let i = 0; i < bottomFoodTypesSelector.length; i++) {
    if (i != index) bottomFoodTypesSelector[i].classList.remove("selected");
  }
};

const setUpperFoodTypeNotSelected = () => {
  for (let i = 0; i < upperFoodTypesSelector.length; i++) {
    upperFoodTypesSelector[i].childNodes[3].classList.remove("activated");
  }
};

const setDaysUnActive = () => {
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove("active");
  }
};

const printSelector = () => {
  console.log(`upperFoodTypeIndex: ${upperFoodTypeIndex}`);
  console.log(`bottomFoodTypeIndex: ${bottomFoodTypeIndex}`);
  console.log(`dayIndex: ${dayIndex}`);
};

const toggleDaysContainer = (status) => {
  if (status == "hide") {
    daysContainer.classList.add("hide");
    daysContainer.classList.remove("show");
  } else {
    daysContainer.classList.add("show");
    daysContainer.classList.remove("hide");
  }
};

const setDayShowed = (index) => {
  dayShowed.innerHTML = days[index].childNodes[0].data;
};

// * VARIABLES DECLARATIONS
let isDaysShowed = false;
let upperFoodTypeIndex = 0;
let bottomFoodTypeIndex = 0;
let dayIndex = 0;
const days = printDays();

// * LISTENER
daysButton.addEventListener("click", () => {
  if (!isDaysShowed) {
    toggleDaysContainer("show");
    rotateChevron();
    hideWrapper();
    isDaysShowed = true;
  } else {
    toggleDaysContainer("hide");
    rotateChevron();
    showWrapper();
    isDaysShowed = false;
  }
});

//  PASTI = 0  -  MERENDA = 1
upperFoodTypesSelector.forEach((foodType, index) => {
  foodType.addEventListener("click", () => {
    setUpperFoodTypeNotSelected();
    foodType.childNodes[3].classList.add("activated");
    upperFoodTypeIndex = index;
    printSelector();
  });
});

//  PRANZO = 0  -  CENA = 1  -  COLAZIONE = 2
bottomFoodTypesSelector.forEach((foodType, index) => {
  foodType.addEventListener("click", () => {
    foodType.classList.add("selected");
    setBottomFoodTypeNotSelected(index);
    bottomFoodTypeIndex = index;
    printSelector();
  });
});

days.forEach((day, index) => {
  day.addEventListener("click", () => {
    setDaysUnActive();
    day.classList.add("active");
    setDayShowed(index);
    toggleDaysContainer("hide");
    rotateChevron();
    showWrapper();
    isDaysShowed = false;
    dayIndex = index;
    printSelector();
  });
});

// * EXCECUTE
setDefaultConfig(upperFoodTypeIndex, bottomFoodTypeIndex);
