const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
   }
];


// Переменные 
const cards = document.querySelector('.places-list'); 
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__button');
const popupForm = document.querySelector('.popup__form');
const addBtn = document.querySelector('.user-info__button');
const nameNewCard = document.querySelector('.popup__input_type_name');
const linkNewCard = document.querySelector('.popup__input_type_link-url');
const popupImgContent = document.querySelector('.popupImg__content');
const popupImg = document.querySelector('.popupImg');
const popupImgClose = document.querySelector('.popupImg__close');

// портфолио 
const profileName = document.querySelector('.user-info__name'); 
const profileJob = document.querySelector('.user-info__job');
const editProfile = document.querySelector('.user-info__edit');
const popupEditProfile = document.querySelector('.popupEditProfile');
const popupEditProfileClose = document.querySelector('.popupEditProfile__close');
const popupEditProfileInputName = document.querySelector('.popupEditProfile__input_type_name');
const popupEditProfileInputLink = document.querySelector('.popupEditProfile__input_type_link-url');
const popupEditProfileBtnSave = document.querySelector('.popupEditProfile__button');


// СОЗДАНИЕ КАРТЫ
function createCard(name, link) {
  const placeCard = document.createElement("div");
  placeCard.classList.add("place-card");
  placeCard.insertAdjacentHTML('beforeend', `
      <div class="place-card__image">
          <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
          <h3 class="place-card__name"></h3>
          <button class="place-card__like-icon"></>
      </div>`);
  placeCard.querySelector(".place-card__name").textContent = name;
  placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;

  addCard(placeCard);
}

// ДОБАВЛЕНИЕ КАРТЫ
popupForm.addEventListener('submit', addNewCard);

function addCard(child) {
  cards.appendChild(child);
}

initialCards.forEach( a => createCard(a.name, a.link));

// УДАЛЕНИЕ КАРТЫ
function cardDelete() {
  if (event.target.classList.contains('place-card__delete-icon')) {
      cards.removeChild(event.target.closest('.place-card'));
  };
}
cards.addEventListener('click', cardDelete);

// ЛАЙКи
function addLike() {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  } 
}
cards.addEventListener('click', addLike);

// ОТКРЫТИЕ ОКНА ЗАГРУЩКИ ДОП ФОТО
function openPopup() {
  popup.classList.add('popup_is-opened');
}
addBtn.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_is-opened');
}
popupClose.addEventListener('click', closePopup);


// Добавление новой карточки
function addNewCard(){
  event.preventDefault();
  createCard(nameNewCard.value, linkNewCard.value);
  popupForm.reset();
  closePopup(); 
}; 

// ОТКРЫТИЕ ОКНА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
popupEditProfileInputName.value = `${profileName.textContent}`;
popupEditProfileInputLink.value = `${profileJob.textContent}`;

function openPopupEditProfile() {
  // открытие окна
  popupEditProfile.classList.add('popupEditProfile_is-opened');
}
editProfile.addEventListener('click', openPopupEditProfile);

function closePopupEditProfile() {
  //Закрытие окна
  popupEditProfile.classList.remove('popupEditProfile_is-opened');
}
popupEditProfileClose.addEventListener('click', closePopupEditProfile);

function popupSave() {
  // Сохранение отредактированого профиля
  event.preventDefault();
  profileName.textContent = `${popupEditProfileInputName.value}`;
  profileJob.textContent = `${popupEditProfileInputLink.value}`;
  closePopupEditProfile();
}
popupEditProfileBtnSave.addEventListener('click', popupSave);

// Открытие фотографии


function openImg(event) {
  if (event.target.classList.contains('place-card__image')) {
    popupImg.style.display = 'flex';
    popupImgContent.style.backgroundImage = event.target.style.backgroundImage;
  };
}
cards.addEventListener('click', openImg);


function closeImg() {
  popupImg.style.display = 'none';
}
popupImgClose.addEventListener('click', closeImg);