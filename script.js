// * GET HTML ELEMENTS
const foodCardsContainer = document.getElementById("cards-container");
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
  days[dayIndex].classList.add("active");
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

const clearFoodCardsContent = () => {
  foodCardsContainer.innerHTML = "";
};

const updateFoodCardsContent = () => {
  clearFoodCardsContent();
  let foodCardsHtml = "";
  // CASO PASTI
  if (!upperFoodTypeIndex) {
    // CASO PRANZO
    if (bottomFoodTypeIndex == 0) {
      for (let i = 0; i < lunchesDays[dayIndex].ingredients.length; i++) {
        foodCardsHtml += `
        <div class="card-single-ingredients">
          <div class="card-ingredients-description">
            <span class="ingrediens-title">${lunchesDays[dayIndex].ingredients[i].name}</span>
            <span class="ingredients-grams">${lunchesDays[dayIndex].ingredients[i].grams}g</span>
          </div>
          <div class="card-ingredients-image">
            
          </div>
        </div>`;
      }
    } // CASO CENA
    else if (bottomFoodTypeIndex == 1) {
      for (let i = 0; i < dinnersDays[dayIndex].ingredients.length; i++) {
        foodCardsHtml += `
        <div class="card-single-ingredients">
          <div class="card-ingredients-description">
            <span class="ingrediens-title">${dinnersDays[dayIndex].ingredients[i].name}</span>
            <span class="ingredients-grams">${dinnersDays[dayIndex].ingredients[i].grams}g</span>
          </div>
          <div class="card-ingredients-image">
            
          </div>
        </div>`;
      }
    } // CASO COLAZIONE
    else {
      for (let i = 0; i < breakfasts.length; i++) {
        foodCardsHtml += `<h3>Proposta ${i + 1}</h3>`;
        for (let j = 0; j < breakfasts[i].ingredients.length; j++) {
          foodCardsHtml += `
          <div class="card-single-ingredients">
            <div class="card-ingredients-description">
              <span class="ingrediens-title">${breakfasts[i].ingredients[j].name}</span>
              <span class="ingredients-grams">${breakfasts[i].ingredients[j].grams}g</span>
            </div>
            <div class="card-ingredients-image">
              
            </div>
          </div>`;
        }
      }
    }
  } // CASO MERENDA
  else {
  }
  /* <img src="./img/5650776.png" alt="pizza" /> */
  foodCardsHtml += `<div class="invisible-margin"></div>`;
  foodCardsContainer.innerHTML = foodCardsHtml;
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
const lunchesDays = [
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
  {
    ingredients: [
      {
        name: "Riso al burro",
        grams: 100,
      },
      {
        name: "Pesce o polpette",
        grams: 230,
      },
      {
        name: "Banana",
        grams: 200,
      },
      {
        name: "Pane",
        grams: 120,
      },
      {
        name: "Tiramisù",
        grams: 200,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Riso alla marinara",
        grams: 100,
      },
      {
        name: "Condimento misto",
        grams: 80,
      },
      {
        name: "Parmigiano",
        grams: "3 cucchiai",
      },
      {
        name: "Triglie o salciccia",
        grams: 200,
      },
      {
        name: "Patate",
        grams: 250,
      },
      {
        name: "Crostata",
        grams: 150,
      },
    ],
  },
];
const dinnersDays = [
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
  {
    ingredients: [
      {
        name: "Grana",
        grams: 70,
      },
      {
        name: "Prosciutto crudo",
        grams: 60,
      },
      {
        name: "Pane",
        grams: 150,
      },
      {
        name: "Gelato",
        grams: 170,
      },
      {
        name: "Kiwi o arancia",
        grams: 160,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Maiale",
        grams: 210,
      },
      {
        name: "Patatine fritte",
        grams: 250,
      },
      {
        name: "Gelato",
        grams: 220,
      },
      {
        name: "Pane",
        grams: 140,
      },
    ],
  },
];
const breakfasts = [
  {
    ingredients: [
      {
        name: "Yogurt greco",
        grams: 150,
      },
      {
        name: "Panino o fette biscottate",
        grams: 50,
      },
      {
        name: "Burro o marmellata",
        grams: "qb",
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Panino",
        grams: 80,
      },
      {
        name: "Prosciutto cotto",
        grams: 80,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Frappè di frutta",
        grams: 240,
      },
      {
        name: "Panino o fette biscottate",
        grams: 60,
      },
      {
        name: "Burro o marmellata",
        grams: "qb",
      },
    ],
  },
];
const snacks = [
  {
    ingredients: [
      {
        name: "Crostata di frutta",
        grams: 170,
      },
      {
        name: "Succo di frutta",
        grams: 150,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Gelato",
        grams: 220,
      },
      {
        name: "Frollini",
        grams: 60,
      },
    ],
  },
  {
    ingredients: [
      {
        name: "Frutta a piacere",
        grams: 220,
      },
      {
        name: "Panino",
        grams: 60,
      },
      {
        name: "Marmellata",
        grams: "qb",
      },
      {
        name: "Pancake",
        grams: 60,
      },
      {
        name: "Noci",
        grams: 30,
      },
    ],
  },
];

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
