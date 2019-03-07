export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (array) => array[getRandomIntegerFromInterval(0, array.length - 1)];

export const getRandomBoolean = () => Math.random() >= 0.5;
