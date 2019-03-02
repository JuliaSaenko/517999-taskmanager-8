import {getRandomIntegerFromInterval} from './util.js';
import {getRandomElement} from './util.js';
import {getRandomBoolean} from './util.js';

const getRandomTags = (count, tags) => {
  const tagsArray = [];
  const tagsArrayLength = tags.length < count ? tags.length : count;

  for (let i = 0; i < tagsArrayLength; i++) {
    tagsArray.push(tags[i]);
  }

  return tagsArray;
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

const colors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];

const getDataForCard = () => ({
  title: getRandomElement(titles),
  dueDate: Date.now() + getRandomIntegerFromInterval(8, -7) * 24 * 60 * 60 * 1000,
  tags: getRandomTags(getRandomIntegerFromInterval(0, 3), tags),
  picture: `//picsum.photos/100/100?r=${getRandomIntegerFromInterval()}`,
  color: getRandomElement(colors),
  repeatingDays: {
    'Mo': getRandomBoolean(),
    'Tu': getRandomBoolean(),
    'We': getRandomBoolean(),
    'Th': getRandomBoolean(),
    'Fr': getRandomBoolean(),
    'Sa': getRandomBoolean(),
    'Su': getRandomBoolean(),
  },
  isRepeat: getRandomBoolean(),
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});

export {getDataForCard};
