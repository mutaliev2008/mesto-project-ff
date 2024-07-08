//import
import { initialCards } from "./cards.js";
import "../pages/index.css";
import {
  deleteCard,
  createCard,
  creatingNewCards,
  likeTheCard,
  openImg,
} from "./card.js";
import {
  openModule,
  closeModule,
  closeWithOverlay,
  closingPopupPressingEsc,
  handleFormSubmit,
} from "./modal.js";

//поиск DOM-элементов
const formNewPlace = document.forms["new-place"];
const popupInputCardName = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const popupInputUrl = formNewPlace.querySelector(".popup__input_type_url");
const popupNewCard = document.querySelector(".popup_type_new-card");
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const formElement = document.forms["edit-profile"];
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");
const renameBtn = document.querySelector(".profile__edit-button");
const btnCreate = document.querySelector(".profile__add-button");
const popup = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
//функция-обработчик события открытия модального окна для редактирования профиля
renameBtn.addEventListener("click", function () {
  openModule(popupEdit);

  jobInput.value = descriptionProfile.textContent;
  nameInput.value = titleProfile.textContent;
});

//функция-обработчик события открытия модального окна для создания новой карточки
btnCreate.addEventListener("click", function () {
  openModule(popupNewCard);
});

//функция-обработчики события закрытия модального окна кликом на оверлей, нажатием на esc и на крестик
popup.forEach(function (element) {
  element.addEventListener("click", closeWithOverlay);
  document.addEventListener("keydown", function (evt) {
    closingPopupPressingEsc(evt, element);
  });
  //функция-обработчик события закрытия модального окна нажатием на крестик
  const popupBtn = element.querySelector(".popup__close");
  popupBtn.addEventListener("click", function () {
    closeModule(element);
  });
});

//функция-обработчик события редактирования профиля и добавления фото
formElement.addEventListener("submit", handleFormSubmit);
formNewPlace.addEventListener("submit", creatingNewCards);

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElement = createCard(item, deleteCard, likeTheCard, openImg);
  cardContainer.append(cardElement);
});

export {
  nameInput,
  jobInput,
  titleProfile,
  descriptionProfile,
  popupEdit,
  popupInputCardName,
  popupInputUrl,
  cardTemplate,
  popupNewCard,
  cardContainer,
};
