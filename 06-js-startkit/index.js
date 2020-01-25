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

