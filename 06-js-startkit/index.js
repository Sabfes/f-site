(function() {
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
  const popupForm = document.querySelector('.popup__form');
  const addBtn = document.querySelector('.user-info__button');
  const nameNewCard = document.querySelector('.popup__input_type_name');
  const linkNewCard = document.querySelector('.popup__input_type_link-url');
  const popupImgContent = document.querySelector('.popupImg__content');
  const popupImg = document.querySelector('.popupImg');
  const popupImgClose = document.querySelector('.popupImg__close');
  const popupBigImage = document.querySelector('.popupImg__bigImage');
  
  // портфолио
  const profileName = document.querySelector('.user-info__name');
  const profileJob = document.querySelector('.user-info__job');
  const editProfile = document.querySelector('.user-info__edit');
  const popupEditProfile = document.querySelector('.popupEditProfile');
  const popupEditProfileClose = document.querySelector('.popupEditProfile__close');
  const popupEditProfileInputName = document.querySelector('.popupEditProfile__input_type_name');
  const popupEditProfileInputLink = document.querySelector('.popupEditProfile__input_type_link-url');
  const popupEditProfileBtnSave = document.querySelector('.popupEditProfile__button');
  const popupEditProfileForm = document.querySelector('.popupEditProfile__form');
  
  
  // Добавление новой карточки
  function addNewCard(){
    event.preventDefault();
    createCard(nameNewCard.value, linkNewCard.value);
    popupForm.reset();
    closePopup();
  };
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
    // закрытие на esc
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == '27') {
        closePopup();
      }
    })
  }
  addBtn.addEventListener('click', openPopup);
  
  function closePopup() {
    popup.classList.remove('popup_is-opened');
  }
  popupClose.addEventListener('click', closePopup);
  
  // открытие окна
  function openPopupEditProfile() {
    // закрытие на esc 
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == '27') {
        closePopupEditProfile();
      }
    })
    popupEditProfileInputName.value = `${profileName.textContent}`;
    popupEditProfileInputLink.value = `${profileJob.textContent}`;
  
    const errorName = document.getElementById('input-error-name');
    const errorJob = document.getElementById('input-error-job');
  
    errorName.textContent = '';
    errorJob.textContent = '';
  
    popupEditProfileBtnSave.classList.remove('popupEditProfile__button_is-closes')
    popupEditProfileBtnSave.removeAttribute('disabled');
    popupEditProfile.classList.add('popupEditProfile_is-opened');
  }
  editProfile.addEventListener('click', openPopupEditProfile);
  
  //Закрытие окна
  function closePopupEditProfile() {
    popupEditProfile.classList.remove('popupEditProfile_is-opened');
  }
  popupEditProfileClose.addEventListener('click', closePopupEditProfile);
  
  // Сохранение отредактированого профиля
  function popupSave(event) {
    const FormElem = Array.from(popupEditProfileForm);
    event.preventDefault();
  
    profileName.textContent = `${popupEditProfileInputName.value}`;
    profileJob.textContent = `${popupEditProfileInputLink.value}`;
  
    setEventListeners(FormElem)
    closePopupEditProfile();
  }
  popupEditProfileForm.addEventListener('submit', popupSave);
  
  //Состояние кнопки
  function setSubmitButtonState(a) {
    if (a) {
      popupEditProfileBtnSave.removeAttribute('disabled');
      popupEditProfileBtnSave.classList.remove('popupEditProfile__button_is-closes');
    } else {
      popupEditProfileBtnSave.setAttribute('disabled', 'disabled');
      popupEditProfileBtnSave.classList.add('popupEditProfile__button_is-closes');
    }
  }
  
  // Валидация формы
  function checkInputValidity(input) {
    const error = event.target.closest('div').querySelector('.popupEditProfile__input-error')
    let isValidity = true;
  
    if (input.target.validity.valueMissing) {
      isValidity = false;
      setSubmitButtonState(isValidity);
      return error.textContent = 'Это обязательное поле';
    }
    if (input.target.validity.tooLong || input.target.validity.tooShort) {
      isValidity = false;
      setSubmitButtonState(isValidity);
      return error.textContent = 'Должно быть от 2 до 30 символов';
    }
    setSubmitButtonState(isValidity)
    error.textContent = '';
  }
  
  // События
  function setEventListeners(popup) {
    for (input of popup) {
      if (input.id !== popupEditProfileBtnSave.id) {
        input.addEventListener('input', checkInputValidity );
      }
    }
  }
  popupEditProfileBtnSave.addEventListener('click', setEventListeners(popupEditProfileForm));
  
  function closeImg() {
    popupImg.style.display = 'none';
  }
  popupImgClose.addEventListener('click', closeImg);
  
  
  // Открытие фотографии
  function openImg(event) {
    const urlImg = event.target.style.backgroundImage.slice(5,-2);
    if (event.target.classList.contains('place-card__image')) {
      popupBigImage.src = urlImg;
      popupImg.style.display = 'flex';
      popupBigImage.style.backgroundImage = event.target.style.backgroundImage;
    };
  
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == '27') {
        closeImg();
      }
    })
  }
  cards.addEventListener('click', openImg);
  
})();

/* REVIEW по заданию 7. Резюме

Основной функционал, требуемый в задании, работает правильно, кроме внесения информации в поля формы профиля
со страницы и её валидация (подробности в ревью в коде).

В чем достигнут успех.
1  Использовано встроенное свойство validity для валидации форм.
2. Созданы функции checkInputValidity, setSubmitButtonState,
setEventListeners, которые требуются в задании.
3. Используется делегирование событий.
4. Используется интерполяция строк из ES6.
5. Используются стрелочные функции.
6. В тексте даны хорошие комментарии.
7. Используется функция insertAdjacentHTML для вставки размётки.
8. Код аккуратен.
9. Предусмотрено закрытие большой картинки по нжатию на ESC.

Что можно улучшить.
1. Обёртывать весь код в IIFE функцию (подробности и пример в ревью в коде). Этот пункт будет обязательным в задании 8.
2. Предусмотреть закрытие по нжатию на ESC всех всплывающих окон.


Что нужно исправить.
1. Переносить информацию о профиле со страницы в поля формы в слушателе события открытия формы профиля (подробности в ревью в коде).   ===>  Сделал.
2. Убирать сообщения об ошибках на форме профиля и делать доступной кнопку "Сохранить" при открытии формы (подробности в ревью в коде). ===> Сделал.
3. Объявление функции в стиле function declaration (именованой функции) делать до её вызова (подробности в ревью в коде). ===> Сделал.
4. Сделать именование const Error с маленькой буквы (подробности в ревью в коде). ===> Сделал.
 После исправления ошибок, протестируйте работу всех функций, чтобы весь проект работал правильно.
*/