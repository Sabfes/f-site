class Popup {
  constructor() {

  }
  open() {

  }
  close() {

  }
}


const cards = document.querySelector('.places-list');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const addBtn = document.querySelector('.user-info__button');
const nameNewCard = document.querySelector('.popup__input_type_name');
const linkNewCard = document.querySelector('.popup__input_type_link-url');
const popupImgContent = document.querySelector('.popupImg__content');
const popupImg = document.querySelector('.popupImg');
const popupBigImage = document.querySelector('.popupImg__bigImage');
  // Переменные
  
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

// ОТКРЫТИЕ ОКНА ЗАГРУЩКИ ДОП ФОТО
function openPopup() {
    popup.classList.add('popup_is-opened');
}
addBtn.addEventListener('click', openPopup);
  
  function closePopup() {
    popup.classList.remove('popup_is-opened');
  }
  popupClose.addEventListener('click', closePopup);
  
  // открытие окна
  function openPopupEditProfile() {
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
  


