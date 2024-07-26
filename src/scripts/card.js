// функция создания карточки, функции-обработчики событий удаления и лайка карточки;
import { cardTemplate } from "./index.js";
import { deletingCard, putLike, deleteLike } from "./api.js";
// @todo: Функция создания карточки

function createCard(item, deleteCard, likeTheCard, openImg, userId) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardBtnDelete = card.querySelector(".card__delete-button");
  const numberLikes = card.querySelector(".number__likes");
  const cardImg = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector(".card__title").textContent = item.name;
  numberLikes.textContent = item.likes.length;
  const isLiked = item.likes.some((like) => like._id === userId);
  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  if (item.owner._id !== userId) {
    cardBtnDelete.style.display = "none";
  } else {
    cardBtnDelete.addEventListener("click", () => {
      deleteCard(card, item._id);
    });
  }

  cardLikeButton.addEventListener("click", () => {
    likeTheCard(cardLikeButton, numberLikes, item._id);
  });

  cardImg.addEventListener("click", function () {
    openImg(item);
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
