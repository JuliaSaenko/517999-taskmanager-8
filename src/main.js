import {renderFilters} from './make-filter.js';
import {renderTasks} from './render-tasks.js';
import {tasksData} from './render-tasks.js';
import {getRandomIntegerFromInterval} from './util.js';


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


renderFilters(FILTERS);
renderTasks(tasksData);
