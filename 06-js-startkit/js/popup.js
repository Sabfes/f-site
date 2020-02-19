class Popup {
  constructor(popup, btnSave, popupEdit, popupBigImg, popupImg) {
    this.popup = popup;
    this.btnSave = btnSave;
    this.popupEdit = popupEdit;
    this.popupBigImage = popupBigImage;
    this.popupImg = popupImg;
  }
  openPopup() {
    this.popup.classList.add('popup_is-opened');
  }
  closePopup() {
    this.popup.classList.remove('popup_is-opened');
  }
  openPopupEditProfile() {
    this.btnSave.classList.remove('popupEditProfile__button_is-closes')
    this.btnSave.removeAttribute('disabled');
    this.popupEdit.classList.add('popupEditProfile_is-opened');
  }
  closePopupEditProfile() {
    this.popupEdit.classList.remove('popupEditProfile_is-opened');
  }
  openImg(event) {
    const urlImg = event.target.style.backgroundImage.slice(5, -2);
    if (event.target.classList.contains('place-card__image')) {
      this.popupBigImage.src = urlImg;
      this.popupImg.style.display = 'flex';
      this.popupBigImage.style.backgroundImage = event.target.style.backgroundImage;
    };
  }
  closeImg() {
    this.popupImg.style.display = 'none';
  }
}








