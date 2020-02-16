class CardList {
    constructor(container, create, likeFunc, removeFunc, openImgFunc, api) {
        this.container = container;
        this.create = create;
        this.like = likeFunc;
        this.remove = removeFunc;
        this.opemImg = openImgFunc;
        this.api = api;
        this.eventListener();
        this.loadCards();
    }
    addCard(child) {
        this.container.appendChild(child);
    }
    render(data) {
        data.forEach(card => {
            if (card.owner.name === 'Denis Bitaev') {
                const user = this.create(card.name, card.link).card;
                this.addCard(user);
            }
        });
    }
    eventListener() {
        this.container.addEventListener('click', (event)=> {
            //delete
            if (event.target.classList.contains('place-card__delete-icon')) {
                this.remove(event);
            }
            //like
            if (event.target.classList.contains('place-card__like-icon')) {
                this.like(event);
            }
            //openImg
            if (event.target.classList.contains('place-card__image')) {
                this.opemImg(event);
            }

        })
    }
    loadCards() {
        this.api().then( (data)=> {
            this.render(data)
        })
    }
}


