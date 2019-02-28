import {getRandomInteger} from './utils.js';
import {getRandomElement} from './utils.js';
import {getRandomBoolean} from './utils.js';

const TAGS_COUNT = 3;

const Time = {
  DAYS: 7,
  HOURS: 24,
  MINUTES: 60,
  SECONDS: 60,
  MILLISECONDS: 1000
};

const titles = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const tags = new Set([
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `todo`,
  `JavaScript`,
  `ES6`
]);

const colors = new Set([
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
]);

const getDataForCard = () => ({
  title: getRandomElement(titles),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * Time.DAYS) * Time.HOURS * Time.MINUTES * Time.SECONDS * Time.MILLISECONDS,
  tags: getRandomElement(tags, TAGS_COUNT),
  picture: `//picsum.photos/100/100?r=${getRandomInteger()}`,
  color: getRandomElement(colors),
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  isRepeat: getRandomBoolean(),
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});

export {getDataForCard};
