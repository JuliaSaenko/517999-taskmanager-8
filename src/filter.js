import {createElement} from './util';

class Filter {
  constructor(data) {
    this._caption = data.caption;
    this._amount = data.amount;
    this._isChecked = data.checked;
  }

  render() {
    this._element = createElement(this.template);
    return this.element;
  }

  get element() {
    return this._element;
  }

  get template() {
    return `
      <input
        type="radio"
        id="filter__${this._caption.toLowerCase()}"
        class="filter__input visually-hidden"
        name="filter"
        ${this._amount ? `` : `disabled`}
        ${this._isChecked ? `checked` : ``}>
      <label for="filter__${this._caption.toLowerCase()}" class="filter__label">
        ${this._caption.toUpperCase()}
        <span class="filter__${this._caption.toLowerCase()}-count">
          ${this._amount}
        </span>
      </label>`;
  }
}

export {Filter};
