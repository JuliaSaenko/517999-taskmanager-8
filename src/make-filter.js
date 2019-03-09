import {render} from './util.js';
import {getRandomIntegerFromInterval} from './util.js';
import {renderCards} from './make-card.js';
import {getDataForCard} from './data-for-card.js';

const mainFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const createFilterElement = (filter) => {
  const lowerFilterName = filter.caption.toLowerCase();
  const upperFilterName = filter.caption.toUpperCase();

  return `<input type="radio"
              id="filter__${lowerFilterName}"
              class="filter__input visually-hidden"
              name="filter"
              ${(filter.disabled) ? `disabled` : ``}
              ${(filter.checked ? `checked` : ``)} />
    <label for="filter__${lowerFilterName}" class="filter__label">
      ${upperFilterName} <span class="filter__${lowerFilterName}-count">${filter.amount}</span>
    </label>`;
};

const renderFilters = (filters) => {
  let content = ``;

  filters.forEach((filter) => {
    content += createFilterElement(filter);
  });

  render(mainFilter, content);

  mainFilter.addEventListener(`change`, () => render(boardTasks, renderCards(getRandomIntegerFromInterval(1, 8), getDataForCard)));
};

export {renderFilters};
