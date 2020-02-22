class UserInfo {
  constructor(nameProfile, jobProfile, nameUser, jobUser, apiRename, popupClose, divAvatar) {
    this.nameProfile = nameProfile;
    this.jobProfile = jobProfile;
    this.nameUser = nameUser;
    this.jobUser = jobUser;
    this.apiRename = apiRename;
    this.popupClose = popupClose;
    this.divAvatar = divAvatar;
    // Элементы DOM вы сохранили, а как насчет данных о пользователе?
    // например this.name=''; this.job='';
    this.name = '';
    this.job = '';
    this.avatarUrl = '';
  }
  GetInfo(apiGetName) {
    apiGetName().then((res) => {
      this.avatarUrl = `Url(${res.avatar})`;
      this.name = res.name;
      this.job = res.about;
      this.setUserInfo();
      //this.divAvatar.style.backgroundImage = `Url(${res.avatar})`;
      //this.nameProfile.textContent = res.name;
      //this.jobProfile.textContent = res.about;
      // Здесь нужно сохранить данные о пользователе внутри класса, в переменных класса.
    })
      .catch((err) => {
        // тут уже промис не нужен, можно в консоль отписать
        console.log(err.message);
      })
  }

  setUserInfo() {
    this.divAvatar.style.backgroundImage =  this.avatarUrl;
    this.nameProfile.textContent = this.name;
    this.jobProfile.textContent = this.job;
    // Тут надо не из DOM брать данные о юзере, а из переменных класса
    // мало ли кто-то другой уже элемент поменял
    this.nameUser.value = this.name;
    this.jobUser.value = this.job;

    const errorName = document.getElementById('input-error-name');
    const errorJob = document.getElementById('input-error-job');

    errorName.textContent = '';
    errorJob.textContent = '';
  }

  updateUserInfo(event) {
    event.preventDefault();
    this.apiRename(this.nameUser.value, this.jobUser.value)
      .then((res) => {
        if (res.ok) {
          this.jobProfile.textContent = `${this.jobUser.value}`;
          this.nameProfile.textContent = `${this.nameUser.value}`;
          this.popupClose();
        }
      })
      .catch((err) => {
        // тут уже промис не нужен, можно в консоль отписать
        console.log(err.message);
      })
  }
}

