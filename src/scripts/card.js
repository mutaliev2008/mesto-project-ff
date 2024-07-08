// функция создания карточки, функции-обработчики событий удаления и лайка карточки;
import {
  popupInputCardName,
  popupInputUrl,
  cardTemplate,
  popupNewCard,
  cardContainer,
} from "./index.js";
import { closeModule, openModule } from "./modal.js";

// @todo: Функция создания карточки
function createCard(item, deleteCard, likeTheCard, openImg) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardBtnDelete = card.querySelector(".card__delete-button");
  const cardImg = card.querySelector(".card__image");
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector(".card__title").textContent = item.name;
  cardBtnDelete.addEventListener("click", deleteCard);
  const cardLikeButton = card.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", likeTheCard);
  cardImg.addEventListener("click", function () {
    openImg(item);
  });
  return card;
}
// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
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

function likeTheCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function openImg(item) {
  const popupTypeImage = document.querySelector(".popup_type_image");
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupImageText = popupTypeImage.querySelector(".popup__caption");
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupImageText.textContent = item.name;
  openModule(popupTypeImage);
}

export { openImg, deleteCard, createCard, creatingNewCards, likeTheCard };
