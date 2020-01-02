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


document.querySelector('.places-list').addEventListener('click', function(event) {
  let cards = document.querySelector('.places-list');
  if (event.target.classList.contains('place-card__delete-icon')) {
    cards.removeChild(event.target.closest('.place-card'));
  };
});


function addCard(name, link) {
  let cards = document.querySelector('.places-list');
  let card = document.createElement('div');
  card.classList.add('place-card');
  cards.appendChild(card);

  //  ТОП СЕКЦИЯ
  let img = document.createElement('div');
  img.classList.add('place-card__image');
  card.appendChild(img);
  img.style.background = `url(${link})`;

  let btn_del = document.createElement('button');
  btn_del.classList.add('place-card__delete-icon');
  img.appendChild(btn_del);

  // бОТ СЕКЦИЯ
  let desc = document.createElement('div');
  desc.classList.add('place-card__description');
  card.appendChild(desc);

  let h3 = document.createElement('h3');
  h3.classList.add('place-card__name');
  desc.appendChild(h3);
  h3.textContent += `${name}`;

  let btn_like = document.createElement('button');
  btn_like.classList.add('place-card__like-icon');
  desc.appendChild(btn_like);
}

for (let i=0; i<10; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}

// ОТКРЫТИЕ ОКНА ЗАГРУЩКИ ДОП ФОТО
document.querySelector('.user-info__button').addEventListener('click', function() {
    document.querySelector('.popup').classList.add('popup_is-opened');
})
document.querySelector('.popup__close').addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('popup_is-opened');
})

// ЛАЙКи
document.querySelector('.places-list').addEventListener('click', function() {
  if (event.target.classList.contains('place-card__like-icon_liked')) {
    event.target.classList.remove('place-card__like-icon_liked');
  } else if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.add('place-card__like-icon_liked');
  }
});


// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
let add = document.querySelector('.popup__button').addEventListener('click', function(event) {
  event.preventDefault();
  let form = document.forms.new;
  let name = form.elements.name.value;
  let link = form.elements.link.value;

  addCard(name, link);
  form.elements.name.value = '';
  form.elements.link.value = '';
  document.querySelector('.popup').classList.remove('popup_is-opened');
});
