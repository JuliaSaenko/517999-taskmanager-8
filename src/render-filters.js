import {Filter} from './filter.js';
import {FILTERS} from './data-for-filter.js';
import {renderTasks, tasksData} from './render-tasks.js';

const mainFilter = document.querySelector(`.main__filter`);
const filtersInput = mainFilter.querySelectorAll(`.filter__input`);

const renderFilters = (array) => {
  mainFilter.innerHTML = ``;

  FILTERS.forEach((i) => {
    let filterComponent = new Filter(array[i]);
    mainFilter.insertAdjacentHTML(`beforeend`, filterComponent.render());
  });

  filtersInput.forEach((item) => {
    item.addEventListener(`change`, () => {
      renderTasks(tasksData);
    });
  });
};

export {renderFilters};
