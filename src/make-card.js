const makeData = (data) => {

  const checkDeadline = (time) => {
    const now = new Date();
    return (time.dueDate > now) ? `` : `card--deadline`;
  };

  const getTimeDeadline = (time) => {
    const date = new Date(time.dueDate);
    const noon = (date.getHours() >= 12) ? `AM` : `PM`;

    return date.getHours() + `:` + date.getMinutes() + ` ` + noon;
  };

  const getDateDeadline = (time) => {
    const date = new Date(time.dueDate);
    const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    return date.getDate() + ` ` + months[date.getMonth()];
  };

  const getRepeatingDays = (repeat) => {
    let repeatDays = [];
    for (let item in repeat.repeatingDays) {
      if (repeat.repeatingDays.hasOwnProperty(item)) {
        if (repeat.repeatingDays[item]) {
          repeatDays.push(item);
        }
      }
    }
    return repeatDays;
  };

  return {
    title: data.title,
    color: data.colors,
    picture: data.picture,
    dueDate: checkDeadline(data),
    cardDate: getDateDeadline(data),
    cardTime: getTimeDeadline(data),
    repeatDay: getRepeatingDays(data),
    tags: data.tags
  };
};

const createCardElement = (object) => {
  return `<article class="card card--${object.color}${object.checkDeadline}${object.repeatDay.length ? `card--repeat` : ``}" style="">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn ${object.isFavorite && `card__btn--favorites`} card__btn--disabled"
          >
            favorites
          </button>
        </div>
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="${object.title}"
              name="text"
            >
  This is example of new task, you can add picture, set date and time, add tags.</textarea
            >
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${object.dueDate > Date.now() ? `yes` : `no`}</span>
              </button>
              <fieldset class="card__date-deadline" disabled>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                    value="${object.getDateDeadline}"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="11:15 PM"
                    name="time"
                    value="${object.timeDeadline}"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${object.isRepeat ? `yes` : `no`}</span>
              </button>
              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-1"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-1"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-1"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-1"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-1"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-1"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-1"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-1"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-1"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-1"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-1"
                  />
                  <label class="card__repeat-day" for="repeat-sa-1"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-1"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-1"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>
            <div class="card__hashtag">
            <div class="card__hashtag-list">
            ${[...object.tags].map((it) => `
            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #${it}
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>`).join(``)}
            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #cinema
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>
            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #entertaiment
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>
          </div>
            </div>
          </div>
          <label class="card__img-wrap card__img-wrap--empty">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${object.picture}""
              alt="task picture"
              class="card__img"
            />
          </label>
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-1"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
                checked
              />
              <label
                for="color-black-1"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-1"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label
                for="color-yellow-1"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-1"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-1"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-1"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-1"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-1"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-1"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>
    `;
};

const renderCards = (count, getDataForCard) => {
  let content = ``;
  let i = 0;

  while (i < count) {
    content += createCardElement(makeData(getDataForCard()));
    i++;
  }
  return content;
};

export {renderCards};
