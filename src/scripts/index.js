//import
import { initialCards } from "./cards.js";
import "../pages/index.css";
import { deleteCard, createCard, likeTheCard } from "./card.js";
import { openModule, closeModule, closeWithOverlay } from "./modal.js";

//поиск DOM-элементов
const formNewPlace = document.forms["new-place"];
const popupInputCardName = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const popupInputUrl = formNewPlace.querySelector(".popup__input_type_url");
const popupNewCard = document.querySelector(".popup_type_new-card");
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const editProfile = document.forms["edit-profile"];
const nameInput = editProfile.querySelector(".popup__input_type_name");
const jobInput = editProfile.querySelector(".popup__input_type_description");
const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");
const renameBtn = document.querySelector(".profile__edit-button");
const btnCreate = document.querySelector(".profile__add-button");
const popups = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupImageText = popupTypeImage.querySelector(".popup__caption");
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

//функция-обработчики события закрытия модального окна кликом на оверлей и нажатием на крестик
popups.forEach(function (element) {
  element.addEventListener("click", closeWithOverlay);

  //функция-обработчик события закрытия модального окна нажатием на крестик
  const popupBtn = element.querySelector(".popup__close");
  popupBtn.addEventListener("click", function () {
    closeModule(element);
  });
});

//функция-обработчик события редактирования профиля и добавления фото
editProfile.addEventListener("submit", handleFormSubmitPoupProfile);
formNewPlace.addEventListener("submit", creatingNewCards);

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElement = createCard(item, deleteCard, likeTheCard, openImg);
  cardContainer.append(cardElement);
});

function handleFormSubmitPoupProfile(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  titleProfile.textContent = nameInputValue;
  descriptionProfile.textContent = jobInputValue;

  closeModule(popupEdit);
}

function creatingNewCards(evt) {
  evt.preventDefault();
  const InputCardNameValue = popupInputCardName.value;
  const InputUrlValue = popupInputUrl.value;
  const informationForCards = {
    name: InputCardNameValue,
    link: InputUrlValue,
  };

  const newCard = createCard(
    informationForCards,
    deleteCard,
    likeTheCard,
    openImg
  );
  cardContainer.prepend(newCard);
  closeModule(popupNewCard);
  evt.target.reset();
}

function openImg(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupImageText.textContent = item.name;
  openModule(popupTypeImage);
}

export { cardTemplate };
