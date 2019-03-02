import {render} from './util.js';
import {renderFilters} from './make-filter.js';
import {renderCards} from './make-card.js';
import {getDataForCard} from './data-for-card.js';
import {getRandomIntegerFromInterval} from './util.js';

const boardTasks = document.querySelector(`.board__tasks`);

let tasksNumber = 7;

const FILTERS = [
  {
    caption: `All`,
    amount: getRandomIntegerFromInterval(10, 40),
    checked: true,
  },
  {
    caption: `Overdue`,
    amount: getRandomIntegerFromInterval(0, 5),
    disabled: true,
  },
  {
    caption: `Today`,
    amount: getRandomIntegerFromInterval(0, 5),
    disabled: true,
  },
  {
    caption: `Favorites`,
    amount: getRandomIntegerFromInterval(0, 10),
  },
  {
    caption: `Repeating`,
    amount: getRandomIntegerFromInterval(0, 7),
  },
  {
    caption: `Tags`,
    amount: getRandomIntegerFromInterval(3, 10),
  },
  {
    caption: `Archive`,
    amount: getRandomIntegerFromInterval(50, 150),
  },
];

export const renderCardsList = (count) => {
  render(boardTasks, renderCards(count, getDataForCard));
};

renderFilters(FILTERS);
renderCardsList(tasksNumber, getDataForCard);
