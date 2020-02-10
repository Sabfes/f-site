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