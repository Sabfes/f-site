class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        this.popupImgClose = document.querySelector('.popupImg__close');
        this.popupImgClose.addEventListener('click', this.closeImg);
    }
    like() {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
    remove() {
        const cards = document.querySelector('.places-list');
        if (event.target.classList.contains('place-card__delete-icon')) {
            cards.removeChild(event.target.closest('.place-card'));
        };
    }
    openImg() {
        const urlImg = event.target.style.backgroundImage.slice(5,-2);
        if (event.target.classList.contains('place-card__image')) {
            popupBigImage.src = urlImg;
            popupImg.style.display = 'flex';
            popupBigImage.style.backgroundImage = event.target.style.backgroundImage;
        };
    }
    closeImg() {
        popupImg.style.display = 'none';
    }
    create(name, link) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.insertAdjacentHTML('beforeend', `
            <div class="place-card__image">
                <button class="place-card__delete-icon"></button>
            </div>
            <div class="place-card__description">
                <h3 class="place-card__name"></h3>
                <button class="place-card__like-icon"></>
            </div>`);
        placeCard.querySelector(".place-card__name").textContent = name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;
        return placeCard;
    }
}
  