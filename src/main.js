import {renderFilters} from './make-filter.js';
import {renderCards} from './make-card.js';
import {getRandomInteger} from './util.js';

let tasksNumber = 7;

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

renderFilters(FILTERS);
renderCards(tasksNumber);
