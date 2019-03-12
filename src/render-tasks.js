import {Task} from "./task";
import {EditTask} from "./edit-task.js";
import {getDataForCard} from './data-for-card.js';

const boardTasks = document.querySelector(`.board__tasks`);
const tasksData = [];

let tasksNumber = 7;

const renderTasks = (array) => {
  let i = 0;
  const fragment = document.createDocumentFragment();

  while (i < array.length) {
    let newTask = new Task(array[i]);
    let editTask = new EditTask(array[i]);


    newTask.onEdit = () => {
      editTask.render();
      boardTasks.replaceChild(editTask.element, newTask.element);
      newTask.unRender();
    };

    editTask.onSubmit = () => {
      newTask.render();
      boardTasks.replaceChild(newTask.element, editTask.element);
      editTask.unRender();
    };

    fragment.appendChild(newTask.render());
    i++;
  }

  boardTasks.appendChild(fragment);
};

for (let i = 0; i < tasksNumber; i++) {
  tasksData.push(getDataForCard());
}

export {renderTasks, tasksData};
