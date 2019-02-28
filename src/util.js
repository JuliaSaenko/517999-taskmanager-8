export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getRandomElement = (array) => array[getRandomInteger(0, array.length - 1)];

export const getRandomBoolean = (boolean) => [true, false][boolean.getRandomInteger(2)];
