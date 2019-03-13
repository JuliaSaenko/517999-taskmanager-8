import {getRandomIntegerFromInterval} from './util.js';

const FILTERS = [
  {
    label: `all`,
    amount: getRandomIntegerFromInterval(10, 40),
    checked: true,
  },
  {
    label: `overdue`,
    amount: getRandomIntegerFromInterval(0, 5),
    disabled: true,
  },
  {
    label: `today`,
    amount: getRandomIntegerFromInterval(0, 5),
    disabled: true,
  },
  {
    label: `favorites`,
    amount: getRandomIntegerFromInterval(0, 10),
  },
  {
    label: `repeating`,
    amount: getRandomIntegerFromInterval(0, 7),
  },
  {
    label: `tags`,
    amount: getRandomIntegerFromInterval(3, 10),
  },
  {
    label: `archive`,
    amount: getRandomIntegerFromInterval(50, 150),
  },
];

export {FILTERS};
