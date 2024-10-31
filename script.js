// * GET HTML ELEMENTS
const daysContainer = document.getElementById("days-container");
const wrapper = document.getElementById("wrapper");
const daysButton = document.getElementById("day-selector-container");

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

const rotateChevron = () => {};

// * VARIABLES DECLARATIONS
let isDaysShowed = false;

// * LISTENER
daysButton.addEventListener("click", () => {
  if (!isDaysShowed) {
    daysContainer.classList.add("show");
    daysContainer.classList.remove("hide");
    hideWrapper();
    isDaysShowed = true;
  } else {
    daysContainer.classList.add("hide");
    daysContainer.classList.remove("show");
    showWrapper();
    isDaysShowed = false;
  }
});

// * EXCECUTE
printDays();
