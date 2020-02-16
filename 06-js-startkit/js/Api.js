class Api{
    constructor(optionals) {
        this.optionals = optionals;
        this.test(this.optionals.headers)
        
        this.getUserInfo();
    }
    test(a) {
        console.log(a);
    }
    // Получаем name и about с сервера
    getUserInfo() {
        fetch('https://praktikum.tk/cohort8/users/me', {
            headers: {
                authorization: 'e76d975f-8925-4594-89b3-80a717000895'
            }
        })
        .then(res => res.json())
        .then((res) => {
            profileName.textContent = res.name;
            profileJob.textContent = res.about;
        });
    };
}
