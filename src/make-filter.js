export default (filter) => {
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
