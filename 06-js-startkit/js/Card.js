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
            /** REVIEW: Надо исправить:
            *   Карточка ничего не должна знать о списке карточек.
             *  Вариант как это исправить: В методе create после создания можно записать элемент карточки в поле
             *  this.element и в методе remove вызвать this.element.remove
            **/
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
                <button class="place-card__like-icon"></>
            </div>
        `);
        placeCard.querySelector(".place-card__name").textContent = name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;

        /** REVIEW: Надо исправить:
         *   События со всех карточек должны быть делегированы через один обработчик на списке карточек.
         *  В данном случае создается N обработчиков на каждую карточку. Для 10 карточек будет создано N*10 обработчиков - это неоптимально.
         **/
        return placeCard;
    }
}
