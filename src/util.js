export const render = (source, content) => {
  source.innerHTML = content;
};

export const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (array) => array[getRandomIntegerFromInterval(0, array.length - 1)];

export const getRandomBoolean = () => Math.random() >= 0.5;

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getTimeDeadline = (time) => {
  const date = new Date(time);
  const noon = (date.getHours() >= 12) ? `AM` : `PM`;
  return date.getHours() + `:` + date.getMinutes() + ` ` + noon;
};

export const getDateDeadline = (time) => {
  const date = new Date(time);
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  return date.getDate() + ` ` + months[date.getMonth()];
};
