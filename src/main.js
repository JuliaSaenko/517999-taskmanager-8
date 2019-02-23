import makeFilter from './make-filter.js';
import makeCard from './make-card.js';

const mainFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

let tasksNumber = 7;
const getRandomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const FILTERS = [
  {
    caption: `All`,
    amount: getRandomInteger(10, 40),
    checked: true,
  },
  {
    caption: `Overdue`,
    amount: getRandomInteger(0, 5),
    disabled: true,
  },
  {
    caption: `Today`,
    amount: getRandomInteger(0, 5),
    disabled: true,
  },
  {
    caption: `Favorites`,
    amount: getRandomInteger(0, 10),
  },
  {
    caption: `Repeating`,
    amount: getRandomInteger(0, 7),
  },
  {
    caption: `Tags`,
    amount: getRandomInteger(3, 10),
  },
  {
    caption: `Archive`,
    amount: getRandomInteger(50, 150),
  },
];

const render = (source, content) => {
  source.innerHTML = content;
};

const renderFilters = (filters) => {
  let content = ``;

  filters.forEach((filter) => {
    content += makeFilter(filter);
  });

  render(mainFilter, content);

  mainFilter.addEventListener(`change`, () => renderCards(getRandomInteger(1, 8)));
};

const renderCards = (count) => {
  let content = ``;

  let i = 0;

  while (i < count) {
    content += makeCard(`black`, `deadline`);
    i++;
  }
  render(boardTasks, content);
};

renderFilters(FILTERS);
renderCards(tasksNumber);
