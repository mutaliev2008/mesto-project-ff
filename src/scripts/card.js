// функция создания карточки, функции-обработчики событий удаления и лайка карточки;
import { cardTemplate } from "./index.js";
import { deletingCard, putLike, deleteLike } from "./api.js";
// @todo: Функция создания карточки

function createCard(item) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardBtnDelete = card.querySelector(".card__delete-button");
  const numberLikes = card.querySelector(".number__likes");
  const cardImg = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");
  cardImg.src = item.card.link;
  cardImg.alt = item.card.name;
  card.querySelector(".card__title").textContent = item.card.name;
  numberLikes.textContent = item.card.likes.length;
  const isLiked = item.card.likes.some((like) => like._id === item.userId);
  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  if (item.card.owner._id !== item.userId) {
    cardBtnDelete.style.display = "none";
  } else {
    cardBtnDelete.addEventListener("click", () => {
      item.deleteCard(card, item.card._id);
    });
  }

  cardLikeButton.addEventListener("click", () => {
    item.likeTheCard(cardLikeButton, numberLikes, item.card._id);
  });

  cardImg.addEventListener("click", function () {
    item.openImg(item.card);
  });

  return card;
}

// @todo: Функция удаления карточки
function deleteCard(card, cardId) {
  deletingCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

function likeTheCard(likeCard, numberLikes, itemId) {
  const haveClass = likeCard.classList.contains("card__like-button_is-active");
  if (haveClass) {
    deleteLike(itemId)
      .then((card) => {
        likeCard.classList.remove("card__like-button_is-active");
        numberLikes.textContent = card.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    putLike(itemId)
      .then((card) => {
        likeCard.classList.add("card__like-button_is-active");
        numberLikes.textContent = card.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export { deleteCard, createCard, likeTheCard };
