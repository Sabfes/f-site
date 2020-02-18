const popupEditProfileBtnSave = document.querySelector('.popupEditProfile__button');
const popupForm = document.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popupEditProfile')
const popup = document.querySelector('.popup');
const nameNewCard = document.querySelector('.popup__input_type_name');
const linkNewCard = document.querySelector('.popup__input_type_link-url');
const popupImg = document.querySelector('.popupImg');
const popupBigImage = document.querySelector('.popupImg__bigImage');
const popupEditProfileForm = document.querySelector('.popupEditProfile__form');
const editProfBtn = document.querySelector('.user-info__edit');
const profileName = document.querySelector('.user-info__name');
const profileJob = document.querySelector('.user-info__job');
const userName = document.querySelector('.popupEditProfile__input_type_name');
const userJob = document.querySelector('.popupEditProfile__input_type_link-url');

const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort8',
  headers: {
    authorization: 'e76d975f-8925-4594-89b3-80a717000895',
    'Content-Type': 'application/json'
  }
});
api.getUserInfo();



const popupStart = new Popup;
const userInf = new UserInfo(api.getUserInfo);
userInf.setName();
editProfBtn.addEventListener('click', userInf.setUserInfo);
const editProfForm = document.getElementById('popupEditProfForm');
editProfForm.addEventListener("submit", userInf.updateUserInfo);


const card = new Card;
const getCard = (...args) => new Card(...args);
const cardList = new CardList(document.querySelector('.places-list'), getCard, card.like, card.disLike, card.remove, popupStart.openImg, api.getCardArray, api.cardLike, api.cardDislike, api.cardDelete);
cardList.eventListener();
cardList.loadCards();
const validateStart = new FormValidator(document.querySelector('.popupEditProfile__form'));

popupEditProfileForm.addEventListener('submit', userInf.updateUserInfo);


document.querySelector('.popupImg__close').addEventListener('click', popupStart.closeImg);
document.querySelector('.user-info__button').addEventListener('click', popupStart.openPopup);
document.querySelector('.popup__close').addEventListener('click', popupStart.closePopup);
document.querySelector('.popupEditProfile__close').addEventListener('click', popupStart.closePopupEditProfile);
document.querySelector('.user-info__edit').addEventListener('click', popupStart.openPopupEditProfile);

// Добавление новой карточки

function addNewCard(event) {
  event.preventDefault();
  const newCard = new Card(nameNewCard.value, linkNewCard.value).card;
  // Надо исправить
  // Нельзя менять данные на странице до того как сервер вернул положительный ответ
  // Сначала надо убедиться, что сервер вернул положительный результат, потом менять DOM
  // То же самое касается и окон попапов -- после сабмита формы сначала опрашиваем сервер,
  // получаем подтверждение операции и только потом попап закрываем и вносим изменения в DOM
  // Исправить надо и в прочих подобных этому слачаях
  api.cardAdd(nameNewCard.value, linkNewCard.value).then( (res)=> {
    console.log(res);
    
    newCard.id = res._id;
    cardList.addCard(newCard);
    popupForm.reset();
    popupStart.closePopup();
  })
};
popupForm.addEventListener('submit', addNewCard);

