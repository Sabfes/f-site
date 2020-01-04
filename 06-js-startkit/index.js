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
// Создание карты 

/*
  Можно лучше: разделить добавление карточки от её добавления в контейнер,
  т.е. сделать две функции:
  createCard - создает элемент карточки и возвращает его
  addCard - добавляет карточку в контейнер
*/

// СОЗДАНИЕ КАРТЫ
function createCard(name, link) {
      /*
      Можно лучше: создавать карточку не вручную через createElement, а использовать
      для этого разметку в виде шаблонной строки.
      Стоит обратить внимание, что вставка данных с помощью интерполяции шаблонной строки и insertAdjacentHTML
      может привести к уязвимости XSS, т.к. данные вставляются на страницу как обычный html, а если они придут
      с сервера в данных может быть код злоумышленника и он будет вставлен на страницу как html и исполнится.
      Поэтому необходимо фильтровать html теги во вставляемых данных или вставлять данные с помощью textContent и 
      style.backgroundImage уже после создания разметки элемента как показано ниже:
  
      const placeCard = document.createElement("div");
      placeCard.classList.add("place-card");
      placeCard.insertAdjacentHTML('beforeend', `
        <div class="place-card__image">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name"></h3>
          <button class="place-card__like-icon"></button>
        </div>`);
      placeCard.querySelector(".place-card__name").textContent = nameValue;
      placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${linkValue})`;
      */
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
    if (event.target.classList.contains('place-card__like-icon_liked')) {
        event.target.classList.remove('place-card__like-icon_liked');
    } else if (event.target.classList.contains('place-card__like-icon')) {
        event.target.classList.add('place-card__like-icon_liked');
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
    const name = document.querySelector('.popup__input_type_name').value;
    const link = document.querySelector('.popup__input_type_link-url').value;
    
    createCard(name, link);
    popupForm.reset();
    popup.classList.remove('popup_is-opened');
}; 


  
/*
  Весь необходимый по заданию функционал работает верно, но 
  к организации кода есть ряд замечаний:

  Надо исправить:
  - поиск элементов на странице производится многократно, при каждом событии, при каждом добавлении
    карточки. Поиск элемента на странице занимает время и делая его множество раз мы замедляем работу программы.
    В дипломе на это есть отдельный критерий: "поиск по DOM-дереву выполняется минимально возможное количество раз"
    Поэтому нужно в начале программы найти элементы на странице, запомнить ссылки на них в элементы, а уже потом
    работать с ними:
    const placesList = document.querySelector('.places-list');
    const newCardPopup = document.querySelector('.popup');
    .........

  - обработчики событий открытия и закрытия попапа, лайка, удаления и добавления карточки сделать отдельными функциями
  - для именования переменных использовать стиль camelCase, именно он является общепринятым в js

  Можно лучше:
  - если переменная не перезаписывается её следует объявлять как const, сейчас  как const объявлен только 
    массив initialCards, но в программе сейчас все переменных можно было объявить как const
  - для создания карточки использовать разметку
  - для перебора массива использовать forEach или for of
  - разбить функцию addCard на две - создание карточки и добавление карточки в контейнер
  - ко всем элементам на странице обращаться однообразно (querySelector)
  - добавление карточки делать по событию формы submit, а не по клику на кнопку
  - для очистки формы использовать метод reset
*/
