class UserInfo {
    constructor(nameProfile, jobProfile, nameUser, jobUser, apiRename, popupClose) {
        this.nameProfile = nameProfile;
        this.jobProfile = jobProfile;
        this.nameUser = nameUser;
        this.jobUser = jobUser;
        this.apiRename = apiRename;
        this.popupClose = popupClose;
    }
    setName(api) {
        api().then( (res)=>{
            this.nameProfile.textContent = res.name;
            this.jobProfile.textContent = res.about;
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
        this.apiRename(this.nameUser.value, this.jobUser.value);
        this.jobProfile.textContent = `${this.jobUser.value}`;
        this.nameProfile.textContent = `${this.nameUser.value}`;
        this.popupClose();
    }
}

