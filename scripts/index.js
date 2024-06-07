// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(item, deleteCard) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardBtnDelete = card.querySelector(".card__delete-button");
  const cardImg = card.querySelector(".card__image");
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector(".card__title").textContent = item.name;
  cardBtnDelete.addEventListener("click", deleteCard);
  return card;
}
// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".places__item").remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElement = createCard(item, deleteCard);
  cardContainer.append(cardElement);
});
