// * GET HTML ELEMENTS
const daysContainer = document.getElementById("days-container");
const wrapper = document.getElementById("wrapper");
const daysButton = document.getElementById("day-selector-container");
const chevron = document.getElementById("fa-chevron-down");
const upperFoodTypesSelector = document.querySelectorAll(".food-type");
const bottomFoodTypesSelector = document.querySelectorAll(".bottom-selector");
const dayShowed = document.getElementById("day-selector");

// * FUNCTION DECLARATIONS
const setDefaultConfig = (
  upperFoodTypeIndex,
  bottomFoodTypeIndex,
  dayIndex
) => {
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

const updateFoodCardsContent = () => {
  let foodCardHtml = `
  <div class="card-single-ingredients">
    <div class="card-ingredients-description">
      <span class="ingrediens-title">Pesce spada</span>
      <span class="ingredients-grams">200g</span>
    </div>
    <div class="card-ingredients-image">
      <img src="./img/5650776.png" alt="pizza" />
    </div>
  </div>`;
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

// * OBJECT DECLARATIONS
const lunches = [
  {
    ingredients: [
      {
        name: "Risotto alla marinara",
        grams: 100,
      },
      {
        name: "Gamberetti o vongole",
        grams: 80,
      },
      {
        name: "Parmigiano",
        grams: 30,
      },
      {
        name: "Pesce spada",
        grams: 220,
      },
      {
        name: "Pane",
        grams: 100,
      },
      {
        name: "Crostata",
        grams: 160,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Pasta all'uovo",
        grams: 110,
      },
      {
        name: "Pomodoro",
        grams: 80,
      },
      {
        name: "Pollo o tacchino",
        grams: 200,
      },
      {
        name: "Pane",
        grams: 130,
      },
      {
        name: "Crostata",
        grams: 130,
      },
    ],
  },
];
const dinners = [
  {
    ingredients: [
      {
        name: "Omelette",
        grams: "2 uova",
      },
      {
        name: "Prosciutto cotto",
        grams: 70,
      },
      {
        name: "Pane",
        grams: 140,
      },
      {
        name: "Banana",
        grams: 200,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Vitello",
        grams: 200,
      },
      {
        name: "Purè di patate",
        grams: 240,
      },
      {
        name: "Pane",
        grams: 140,
      },
      {
        name: "Banana",
        grams: 200,
      },
      {
        name: "Noci",
        grams: 60,
      },
    ],
  },
];
const breakfasts = [];
const snacks = [];

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
    updateFoodCardsContent();
  });
});

//  PRANZO = 0  -  CENA = 1  -  COLAZIONE = 2
bottomFoodTypesSelector.forEach((foodType, index) => {
  foodType.addEventListener("click", () => {
    foodType.classList.add("selected");
    setBottomFoodTypeNotSelected(index);
    bottomFoodTypeIndex = index;
    updateFoodCardsContent();
  });
});

//  GIORNO X = X-1
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
    updateFoodCardsContent();
  });
});

// * EXCECUTE
setDefaultConfig(upperFoodTypeIndex, bottomFoodTypeIndex, dayIndex);
