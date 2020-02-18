/* eslint-disable class-methods-use-this */
class Api {
  constructor(options) {
    this.options = options;
    this.IP = 'https://praktikum.tk/cohort8';
    this.authorizationKey = 'e76d975f-8925-4594-89b3-80a717000895';
  }
  // Получаем name и about с сервера
  getUserInfo() {
    return fetch(`https://praktikum.tk/cohort8/users/me`, {
      headers: {
        authorization: `e76d975f-8925-4594-89b3-80a717000895`,
      }
    })
    .then(res => res.json());
  };

  // Получаем промис с картами
  getCardArray() {
    return fetch(`https://praktikum.tk/cohort8/cards`, {
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
  }

  // Редактирование имени
  renameUserInfo(name, about) {
    fetch(`https://praktikum.tk/cohort8/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: 'e76d975f-8925-4594-89b3-80a717000895',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      })
    });
  }

  //Добавление карты
  cardAdd(name, link) {
    return fetch(`https://praktikum.tk/cohort8/cards`, {
      method: 'POST',
      headers: {
        authorization: 'e76d975f-8925-4594-89b3-80a717000895',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      })
    }).then((res)=> {
      return res.json();
    })
  }
  //Удаление карты
  cardDelete(id) {
    fetch(`https://praktikum.tk/cohort8/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'e76d975f-8925-4594-89b3-80a717000895',
        'Content-Type': 'application/json'
      },
    });
  }
  // Лайк карточки
  cardLike(id) {
    fetch(`https://praktikum.tk/cohort8/cards/like/${id}`, {
      method: 'PUT',
      headers: {
        authorization: 'e76d975f-8925-4594-89b3-80a717000895',
        'Content-Type': 'application/json'
      },
    });
  }
  // Дизлайк карточки
  cardDislike(id) {
    fetch(`https://praktikum.tk/cohort8/cards/like/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'e76d975f-8925-4594-89b3-80a717000895',
        'Content-Type': 'application/json'
      },
    });
  }
}






