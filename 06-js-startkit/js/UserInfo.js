class UserInfo {
    constructor(api) {
        this.api = api;
    }
    setName() {
        this.api().then( (res)=>{
            profileName.textContent = res.name;
            profileJob.textContent = res.about;
        })
    }
    setUserInfo() {
        userName.value = profileName.textContent;
        userJob.value = profileJob.textContent;

        const errorName = document.getElementById('input-error-name');
        const errorJob = document.getElementById('input-error-job');

        errorName.textContent = '';
        errorJob.textContent = '';
    }
    updateUserInfo(event) {
        event.preventDefault();
        api.renameUserInfo(userName.value, userJob.value);
        profileJob.textContent =` ${userJob.value}`;
        profileName.textContent = `${userName.value}`;
        popupStart.closePopupEditProfile();
    }
}

