class UserInfo {
  constructor(nameProfile, jobProfile, nameUser, jobUser, apiRename, popupClose) {
    this.nameProfile = nameProfile;
    this.jobProfile = jobProfile;
    this.nameUser = nameUser;
    this.jobUser = jobUser;
    this.apiRename = apiRename;
    this.popupClose = popupClose;
  }
  setAvatar(apiGetName , divAvatar) {
    apiGetName().then((res) => {
      divAvatar.style.backgroundImage  = `Url(${res.avatar})`;
    })
    .catch( (res) => {
      console.log(res);
    })
  }
  setName(apiGetName) {
    // плохое имя для метода, непонятно что вы тут делаете, вместо api надо что-то более очевидное использовать
    apiGetName().then((res) => {
      // если catch из метода Api не вернет reject, то ответ прилетит в then, сюда,
      // поэтому даже сбой операции будет считаться успешным
      // и такая беда у вас везде где к Api обращаетесь.
      this.nameProfile.textContent = res.name;
      this.jobProfile.textContent = res.about;
    })
    .catch( (res) => {
      console.log(res);
    })
  }
  setUserInfo() {
    this.nameUser.value = this.nameProfile.textContent;
    this.jobUser.value = this.jobProfile.textContent;

    const errorName = document.getElementById('input-error-name');
    const errorJob = document.getElementById('input-error-job');

    errorName.textContent = '';
    errorJob.textContent = '';
  }
  updateUserInfo(event) {
    event.preventDefault();
    // что будет если сервер вернул ошибку?
    this.apiRename(this.nameUser.value, this.jobUser.value)
    .then( (res) =>  {
      this.jobProfile.textContent = `${this.jobUser.value}`;
      this.nameProfile.textContent = `${this.nameUser.value}`;
      this.popupClose();
    })
    .catch( (err) => {
      console.log(err);
    })
  }

}

