import {Filter} from './filter.js';
import {FILTERS} from './data-for-filter.js';
import {renderTasks, tasksData} from './render-tasks.js';


renderTasks(tasksData);

const filter = new Filter(FILTERS);
filter.render();
