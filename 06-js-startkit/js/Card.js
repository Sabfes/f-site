class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        this.card = this.create(name ,link);
    }
    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
    remove(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
           event.target.parentNode.parentNode.remove();

        };
    }
    create(name, link) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.insertAdjacentHTML('beforeend',
        `
            <div class="place-card__image">
                <button class="place-card__delete-icon"></button>
            </div>
            <div class="place-card__description">
                <h3 class="place-card__name"></h3>
                <div class="place-card__like-box">
                    <button class="place-card__like-icon"></button>
                    <p class="place-card__like-counter">0</p>
                </div>
            </div>
        `);
        placeCard.querySelector(".place-card__name").textContent = name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;

        return placeCard;
    }
}
