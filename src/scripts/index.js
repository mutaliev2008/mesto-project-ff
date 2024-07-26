//import
import "../pages/index.css";
import { deleteCard, createCard, likeTheCard } from "./card.js";
import { openModule, closeModule, closeWithOverlay } from "./modal.js";
import { clearValidation, enableValidation } from "./validation.js";

import {
  getUserInfo,
  getInitialCards,
  updatingTheUserProfile,
  addingNewCard,
  upgradeAvatar,
} from "./api.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//поиск DOM-элементов
const formNewPlace = document.forms["new-place"];
const formNewAvatar = document.forms["new-avatar"];
const popupNewAvatar = document.querySelector(".popup_type_new-avatar");
const popupInputCardName = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const profileImageContainer = document.querySelector(
  ".profile__image_container"
);
const popupNewAvatarInputUrl = popupNewAvatar.querySelector(
  ".popup__input_type_url"
);
const popupInputUrl = formNewPlace.querySelector(".popup__input_type_url");
const profileImage = document.querySelector(".profile__image");
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
const profileSaveButton = popupNewAvatar.querySelector(".popup__button");
//функция-обработчик события открытия модального окна для редактирования профиля
renameBtn.addEventListener("click", function () {
  openModule(popupEdit);
  clearValidation(editProfile, validationConfig);
  jobInput.value = descriptionProfile.textContent;
  nameInput.value = titleProfile.textContent;
});
//функция-обработчик события открытия модального окна для обновления автара
profileImageContainer.addEventListener("click", function () {
  openModule(popupNewAvatar);
  clearValidation(formNewAvatar, validationConfig);
});

//функция-обработчик события открытия модального окна для создания новой карточки
btnCreate.addEventListener("click", function () {
  openModule(popupNewCard);
  clearValidation(formNewPlace, validationConfig);
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

function loadingData(loading, button) {
  if (loading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранение";
  }
}

//функция-обработчик события редактирования профиля и добавления карточки
editProfile.addEventListener("submit", handleFormSubmitPoupProfile);
formNewPlace.addEventListener("submit", creatingNewCards);

function handleFormSubmitPoupProfile(evt) {
  evt.preventDefault();
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  loadingData(true, popupEdit.querySelector(".popup__button"));

  updatingTheUserProfile(nameInputValue, jobInputValue)
    .then((res) => {
      titleProfile.textContent = res.name;
      descriptionProfile.textContent = res.about;
      closeModule(popupEdit);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loadingData(false, popupEdit.querySelector(".popup__button"));
    });
}
profileSaveButton.addEventListener("click", updateAvatar);

function updateAvatar(evt) {
  evt.preventDefault();

  loadingData(true, formNewAvatar.querySelector(".popup__button"));

  const avatarInputUrlValue = popupNewAvatarInputUrl.value;
  profileImage.style.backgroundImage = avatarInputUrlValue;
  profileSaveButton.disabled = true;

  upgradeAvatar(avatarInputUrlValue)
    .then((ava) => {
      profileImage.style.backgroundImage = `url('${ava.avatar}')`;
      closeModule(popupNewAvatar);
      clearValidation(formNewAvatar, validationConfig);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loadingData(false, formNewAvatar.querySelector(".popup__button"));
    });
}

function creatingNewCards(evt) {
  evt.preventDefault();
  loadingData(true, popupNewCard.querySelector(".popup__button"));

  const InputCardNameValue = popupInputCardName.value;
  const InputUrlValue = popupInputUrl.value;

  addingNewCard(InputCardNameValue, InputUrlValue)
    .then((card) => {
      const newCard = createCard({
        card,
        deleteCard,
        likeTheCard,
        openImg,
        userId,
      });
      cardContainer.prepend(newCard);
      closeModule(popupNewCard);
      evt.target.reset();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loadingData(false, popupNewCard.querySelector(".popup__button"));
    });
}

function openImg(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupImageText.textContent = item.name;
  openModule(popupTypeImage);
}

enableValidation(validationConfig);

let userId;
Promise.all([getUserInfo(), getInitialCards()])
  .then((array) => {
    const [userData, cardList] = array;
    titleProfile.textContent = userData.name;
    descriptionProfile.textContent = userData.about;
    profileImage.style.backgroundImage = "url('" + userData.avatar + "')";
    userId = userData._id;
    fillingInTheCards(cardList, userId);
  })
  .catch((error) => {
    console.log(error);
  });

function fillingInTheCards(cardList, userId) {
  cardList.forEach((card) => {
    insertCard(card, deleteCard, likeTheCard, openImg, userId);
  });
}

function insertCard(card, deleteCard, likeTheCard, openImg, userId) {
  const cardElement = createCard({
    card,
    deleteCard,
    likeTheCard,
    openImg,
    userId,
  });
  cardContainer.append(cardElement);
}

export { cardTemplate };
