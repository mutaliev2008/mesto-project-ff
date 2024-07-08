// функция открытия модального окна
function openModule(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closingPopupPressingEsc);
}
// функция закрытия модального окна
function closeModule(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closingPopupPressingEsc);
}
// функция-обработчик события клика по оверлею
function closeWithOverlay(evt) {
  closeModule(evt.target);
}
// функция-обработчик события нажатия Esc
function closingPopupPressingEsc(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModule(popup);
  }
}

export { openModule, closeModule, closeWithOverlay };
