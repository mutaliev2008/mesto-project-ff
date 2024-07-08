import {
  nameInput,
  jobInput,
  titleProfile,
  descriptionProfile,
  popupEdit,
} from "./index.js";

// функция открытия модального окна
function openModule(popup) {
  popup.classList.add("popup_is-opened");
}
// функция закрытия модального окна
function closeModule(popup) {
  popup.classList.remove("popup_is-opened");
}
// функция-обработчик события клика по оверлею
function closeWithOverlay(evt) {
  evt.target.classList.remove("popup_is-opened");
}
// функция-обработчик события нажатия Esc
function closingPopupPressingEsc(evt, element) {
  if (evt.key === "Escape") {
    element.classList.remove("popup_is-opened");
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  titleProfile.textContent = nameInputValue;
  descriptionProfile.textContent = jobInputValue;

  closeModule(popupEdit);
}

export {
  openModule,
  closeModule,
  closeWithOverlay,
  closingPopupPressingEsc,
  handleFormSubmit,
};
