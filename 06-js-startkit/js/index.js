const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
     }
];



const popupEditProfileBtnSave = document.querySelector('.popupEditProfile__button');
const popupForm = document.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popupEditProfile')
const popup = document.querySelector('.popup');
const nameNewCard = document.querySelector('.popup__input_type_name');
const linkNewCard = document.querySelector('.popup__input_type_link-url');
const popupImg = document.querySelector('.popupImg');
const popupBigImage = document.querySelector('.popupImg__bigImage');
const popupEditProfileForm = document.querySelector('.popupEditProfile__form');
const editProfBtn = document.querySelector('.user-info__edit');
const profileName = document.querySelector('.user-info__name');
const profileJob = document.querySelector('.user-info__job');
const userName = document.querySelector('.popupEditProfile__input_type_name');
const userJob = document.querySelector('.popupEditProfile__input_type_link-url');
const cardsList = document.querySelector('.places-list');
const popupStart = new Popup;
const userInf = new UserInfo;

editProfBtn.addEventListener('click', userInf.setUserInfo);
const editProfForm = document.getElementById('popupEditProfForm');
editProfForm.addEventListener("submit", userInf.updateUserInfo);

/** REVIEW: Надо исправить:
*   Для каждой карточки должен создаваться новый инстанс Card.
 *  Card создает элемент карточки и содержит методы для манипуляций c DOM для лайка\удаления.
 *  CardList должен хранить список инстансов Card, рендерить карточки в контейнере и делегировать события
 *  со всех карточек через один обработчик.
 *  Для создания инстансов Card внутрь CardList можно передать колбек: const getCard = (...args) => new Card(...args);
 *  т.к. существует критерий `Инстансы классов не должны создаваться напрямую из других классов.`
**/
const card = new Card;
const getCard = (...args) => new Card(...args);
const cardList = new CardList(document.querySelector('.places-list'), initialCards, getCard , card.like, card.remove, popupStart.openImg);
const validateStart = new FormValidator(document.querySelector('.popupEditProfile__form'));

popupEditProfileForm.addEventListener('submit', userInf.updateUserInfo);

/** REVIEW: Можно лучше:
*   Лишние обьявления переменных. popupImgClose, ddBtn, popupClose, popupEditProfileClose, editProfile не используются.
 *  В них содержатся undefined. addEventListener возвращает undefined.
**/
document.querySelector('.popupImg__close').addEventListener('click', popupStart.closeImg);
document.querySelector('.user-info__button').addEventListener('click', popupStart.openPopup);
document.querySelector('.popup__close').addEventListener('click', popupStart.closePopup);
document.querySelector('.popupEditProfile__close').addEventListener('click', popupStart.closePopupEditProfile);
document.querySelector('.user-info__edit').addEventListener('click', popupStart.openPopupEditProfile);

// Добавление новой карточки
popupForm.addEventListener('submit', addNewCard);

function addNewCard(event){
  event.preventDefault();
  const newCard = new Card(nameNewCard.value, linkNewCard.value).card;
  cardList.addCard(newCard);
  popupForm.reset();
  popupStart.closePopup();
};

/** REVIEW: В целом по работе:
 * !!! Просьба не удалять комментарии проверяющего до принятия работы - это затрудняет проверку !!!
 *
 * После рефакторинга на классы функциональность работает в полном обьеме. К коду и структуре
 * классов остались критические замечания.
 *
 *  Большинство мест, которые отмечены "Можно лучше" было бы замечательно исправить в этом спринте
 *  - эти мелочи помогут не допускать ошибок в следующих спринтах
 *
 * Внимание: Работа принимается только при исправлении всех "Надо исправить" - в этом блоке и комментариях по коду.
 *
 * Что важно исправить(работа принимается только при исправлении всех "Надо исправить"):
 * - События со всех карточек должны быть делегированы через один обработчик на списке карточек.
 * - Для каждой карточки должен создаваться новый инстанс Card
 *
 * Что сделано хорошо:
 * - Пользовательский ввод вставлен через textContent, после создания разметки через шаблонную строку.
 * - Инстансы классов не создаются напрямую из других классов
 * - Ясный код, понятная логика
 *
 *
 * Что можно улучшить(необязательно):
 * - Убрать из консоли отладочные сообщения
 * - В обработчиках нужно явно обьявлять аргумент event. Использование window.event считается устаревшим и
 * может приводить к ошибкам
 * - Все данные необходимые для работы классса нужно передавать через аргументы конструктора или методов,
 * а не связывать через глобальные переменные
 * - Можно добавить функцию для очистки ввода от тегов и вставлять напрямую в шаблонную строку
 * безопасный результат обработки функцией.
 function sanitize(string) {
                const map = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#x27;',
                    "/": '&#x2F;',
                };
                const reg = /[&<>"'/]/ig;
                return string.replace(reg, (match)=>(map[match]));
            }
 * - Данные, необходимые для работы классов должны передаваться через аргументы методов или конструктора.
 * Использование глобаных переменных для этой цели сильно связывает код.
 *
 **/
