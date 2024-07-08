// функция создания карточки, функции-обработчики событий удаления и лайка карточки;
import { cardTemplate } from "./index.js";

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

function likeTheCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { deleteCard, createCard, likeTheCard };
