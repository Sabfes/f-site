class Api{
    constructor(optionals) {
        this.optionals = optionals;
        this.authorizationCode = optionals.headers.authorization;
        this.getUserInfo();
        this.test(this.optionals.headers.authorization);
    }
    test(a) {
        console.log(a);
    }
    // Получаем name и about с сервера
    async getUserInfo() {
        fetch('https://praktikum.tk/cohort8/users/me', {
            headers: {
                authorization: `${this.authorizationCode}`,
            }
        })
        .then(res => res.json())
        .then((res) => {
            profileName.textContent = res.name;
            profileJob.textContent = res.about;
        });
    };
    // Получаем промис с картами 
    getCardArray() {
        return fetch('https://praktikum.tk/cohort8/cards', {
            headers: {
                authorization: 'e76d975f-8925-4594-89b3-80a717000895',
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch(error=> {
            console.log(error);
        })
    }
}
const api = new Api({
    baseUrl: 'https://praktikum.tk/cohort8',
    headers: {
      authorization: 'e76d975f-8925-4594-89b3-80a717000895',
      'Content-Type': 'application/json'
    }
});








