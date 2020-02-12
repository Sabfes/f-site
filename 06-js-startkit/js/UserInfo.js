class UserInfo {
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
        profileName.textContent = `${userName.value}`;
        profileJob.textContent = `${userJob.value}`;
        popupStart.closePopupEditProfile();
    }
}

