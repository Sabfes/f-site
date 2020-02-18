class Popup {
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
  openImg(event) {
    const urlImg = event.target.style.backgroundImage.slice(5, -2);
    if (event.target.classList.contains('place-card__image')) {
      popupBigImage.src = urlImg;
      popupImg.style.display = 'flex';
      popupBigImage.style.backgroundImage = event.target.style.backgroundImage;
    };
  }
  closeImg() {
    popupImg.style.display = 'none';
  }
}








