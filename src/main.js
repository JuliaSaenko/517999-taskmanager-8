import {renderFilters} from './make-filter.js';
import {getDataForCard} from './data-for-card.js';
import {getRandomIntegerFromInterval} from './util.js';
import {Card} from "./card";
import {EditCard} from "./edit-card.js";

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


renderFilters(FILTERS);

const getMoreCards = (count) => {
  let i = 0;
  const fragment = document.createDocumentFragment();


  while (count > i) {
    const getDataForCards = getDataForCard();
    const newCard = new Card(getDataForCards);
    const editCard = new EditCard(getDataForCards);


    newCard.onEdit = () => {
      editCard.render();
      boardTasks.replaceChild(editCard.element, newCard.element);
      newCard.unRender();
    };

    editCard.onSubmit = () => {
      newCard.render();
      boardTasks.replaceChild(newCard.element, editCard.element);
      editCard.unRender();
    };

    fragment.appendChild(newCard.render());
    i++;
  }

  boardTasks.appendChild(fragment);

};

getMoreCards(tasksNumber);

export {getMoreCards};
