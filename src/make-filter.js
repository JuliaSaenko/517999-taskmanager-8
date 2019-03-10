import {render} from './util.js';
import {getRandomIntegerFromInterval} from './util.js';
import {getMoreCards} from './main.js';

const mainFilter = document.querySelector(`.main__filter`);

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

  mainFilter.addEventListener(`change`, () => getMoreCards(getRandomIntegerFromInterval(1, 8)));
};

export {renderFilters};
