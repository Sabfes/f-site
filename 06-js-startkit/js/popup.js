class Popup {
  constructor() {
    this.addBtn = document.querySelector('.user-info__button').addEventListener('click', this.openPopup);
    this.popupClose = document.querySelector('.popup__close').addEventListener('click', this.closePopup);
    this.popupEditProfileClose = document.querySelector('.popupEditProfile__close').addEventListener('click', this.closePopupEditProfile);
    this.editProfile = document.querySelector('.user-info__edit').addEventListener('click', this.openPopupEditProfile);
  }
  openPopup() {
    popup.classList.add('popup_is-opened');
  }
  closePopup() {
    popup.classList.remove('popup_is-opened');
  }
  openPopupEditProfile() {
    popupEditProfileBtnSave.classList.remove('popupEditProfile__button_is-closes')
    popupEditProfileBtnSave.removeAttribute('disabled');
    popupEditProfile.classList.add('popupEditProfile_is-opened');
  }
  closePopupEditProfile() {
    popupEditProfile.classList.remove('popupEditProfile_is-opened');
  }
}



  
  
 
 

