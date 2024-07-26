// function getInitialCards() {
//   return fetch(`${config.baseUrl}/cards`, {
//     headers: config.headers,
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     // если ошибка, отклоняем промис
//     return Promise.reject(`Ошибка: ${res.status}`);
//   });
// }

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-18",
  headers: {
    authorization: "0c3b66f3-c15a-464e-aede-6f266e12a29d",
    "Content-Type": "application/json",
  },
};

const getData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => getData(res));
};

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => getData(res));
};

const updatingTheUserProfile = (nameInput, jobInput) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput,
      about: jobInput,
    }),
  }).then((res) => getData(res));
};

const addingNewCard = (InputCardNameValue, InputUrlValue) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: InputCardNameValue,
      link: InputUrlValue,
    }),
  }).then((res) => getData(res));
};

const deletingCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getData(res));
};

const putLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => getData(res));
};

const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getData(res));
};

const upgradeAvatar = (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  }).then((res) => getData(res));
};

export {
  getUserInfo,
  getInitialCards,
  updatingTheUserProfile,
  addingNewCard,
  deletingCard,
  putLike,
  deleteLike,
  upgradeAvatar,
};
