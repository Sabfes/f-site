class FormValidator {
  constructor(popup) {
    this.form = popup;
    this.setEventListeners(this.form);
  }

  setEventListeners(form) {
    for (let elem of form) {
      if (elem.id !== popupEditProfileBtnSave.id) {
        elem.addEventListener('input', this.checkInputValidity);
      }
    }
  }

  checkInputValidity(elem) {
    const error = elem.target.closest('div').querySelector('.popupEditProfile__input-error')
    let isValidity = true;

    if (elem.target.validity.valueMissing) {
      isValidity = false;
      validateStart.setSubmitButtonState(isValidity);
      return error.textContent = 'Это обязательное поле';
    }
    if (elem.target.validity.tooLong || elem.target.validity.tooShort) {
      isValidity = false;
      validateStart.setSubmitButtonState(isValidity);
      return error.textContent = 'Должно быть от 2 до 30 символов';
    }
    validateStart.setSubmitButtonState(isValidity);
    error.textContent = '';
  }

  setSubmitButtonState(isValidity) {
    if (isValidity) {
      popupEditProfileBtnSave.removeAttribute('disabled');
      popupEditProfileBtnSave.classList.remove('popupEditProfile__button_is-closes');
    } else {
      popupEditProfileBtnSave.setAttribute('disabled', 'disabled');
      popupEditProfileBtnSave.classList.add('popupEditProfile__button_is-closes');
    }
  }
}
