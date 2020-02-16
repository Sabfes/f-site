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


const popupStart = new Popup;
const userInf = new UserInfo;

editProfBtn.addEventListener('click', userInf.setUserInfo);
const editProfForm = document.getElementById('popupEditProfForm');
editProfForm.addEventListener("submit", userInf.updateUserInfo);


const card = new Card;
const getCard = (...args) => new Card(...args);
const cardList = new CardList(document.querySelector('.places-list'), getCard , card.like, card.remove, popupStart.openImg, api.getCardArray);
const validateStart = new FormValidator(document.querySelector('.popupEditProfile__form'));

popupEditProfileForm.addEventListener('submit', userInf.updateUserInfo);


document.querySelector('.popupImg__close').addEventListener('click', popupStart.closeImg);
document.querySelector('.user-info__button').addEventListener('click', popupStart.openPopup);
document.querySelector('.popup__close').addEventListener('click', popupStart.closePopup);
document.querySelector('.popupEditProfile__close').addEventListener('click', popupStart.closePopupEditProfile);
document.querySelector('.user-info__edit').addEventListener('click', popupStart.openPopupEditProfile);

// Добавление новой карточки
popupForm.addEventListener('submit', addNewCard);

function addNewCard(event){
  event.preventDefault();
  const newCard = new Card(nameNewCard.value, linkNewCard.value).card;
  cardList.addCard(newCard);
  popupForm.reset();
  popupStart.closePopup();
};


