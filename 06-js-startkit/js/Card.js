class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
    remove(event) {
        const cards = document.querySelector('.places-list');
        if (event.target.classList.contains('place-card__delete-icon')) {
            cards.removeChild(event.target.closest('.place-card'));
        };
    }
    create(name, link, openImg) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.insertAdjacentHTML('beforeend', 
        `
            <div class="place-card__image">
                <button class="place-card__delete-icon"></button>
            </div>
            <div class="place-card__description">
                <h3 class="place-card__name"></h3>
                <button class="place-card__like-icon"></>
            </div>
        `);
        placeCard.querySelector(".place-card__name").textContent = name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;

        // Не получается сделать на this.like и this.remove        
        placeCard.addEventListener('click', card.like);
        placeCard.addEventListener('click', card.remove);
        
        placeCard.addEventListener('click', openImg);
        
        return placeCard;
    }
}
