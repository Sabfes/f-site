
class Api {
  constructor(options) {
    this.options = options;
  }
  // Получаем name и about с сервера
  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        authorization: `${this.options.headers.authorization}`,
      } 
    })
    .then( res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error ${res.status}`);
      }
    })
    .then( (res)=> {
      return res
    })
    .catch( (err) => {
      console.log(err);
    })
  };
  // Получаем промис с картами
  getCardArray() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: {
        authorization: `${this.options.headers.authorization}`,
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error ${res.status}`);
      }
    })
    .then((data) => {
      return data;
    })
    .catch( (err) => {
      console.log(err);
    })
  }
  // Редактирование имени
  renameUserInfo(name, about) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this.options.headers.authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      })
    }).then( (res) => {
      if (res.ok) {
        return res;
      } else {
        return Promise.reject(`Error ${res.status}`)
      }
    }) 
    .catch( (err) => {
      console.log(err);
    })
  }

  //Добавление карты
  cardAdd(name, link) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `${this.options.headers.authorization}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      })
    })
    .then((res)=> {
      if (res.ok) {
        return res;
      } else {
        return Promise.reject(`Error ${res.status}`)
      }
    })
    .catch( (err) => {
      console.log(err);
    })
  }
  //Удаление карты
  cardDelete(id) {
    return fetch(`${this.options.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this.options.headers.authorization}`,
        'Content-Type': 'application/json'
      },
    }).then( (res) => {
      if (res.ok) {
        return res;
      } else {
        return Promise.reject(`Error ${res.status}`)
      }
    }) 
    .catch( (err) => {
      console.log(err);
    })
  }
  // Лайк карточки
  cardLike(id) {
    return fetch(`${this.options.baseUrl}/cards/like/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `${this.options.headers.authorization}`,
        'Content-Type': 'application/json'
      },
    }).then( (res) => {
      if (res.ok) {
        return res;
      } else {
        return Promise.reject(`Error ${res.status}`)
      }
    }) 
    .catch( (err) => {
      console.log(err);
    })
  }
  // Дизлайк карточки
  cardDislike(id) {
    return fetch(`${this.options.baseUrl}/cards/like/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this.options.headers.authorization}`,
        'Content-Type': 'application/json'
      },
    }).then( (res) => {
      if (res.ok) {
        return res;
      } else {
        return Promise.reject(`Error ${res.status}`)
      }
    }) 
    .catch( (err) => {
      console.log(err);
    })
  }
}






