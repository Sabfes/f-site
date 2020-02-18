class CardList {
    constructor(container, create, likeFunc, dislike, removeFunc, openImgFunc, api, cardLike, cardDislike, cardDelete) {
        this.container = container;
        this.create = create;
        this.like = likeFunc;
        this.dislike = dislike;
        this.remove = removeFunc;
        this.opemImg = openImgFunc;
        this.api = api;
        this.cardLike = cardLike;
        this.cardDislike = cardDislike;
        this.cardDelete = cardDelete;
    }
    addCard(child) {
        this.container.insertBefore(child, this.container.firstChild);
    }
    render(data) {
        data.forEach(card => {
            if (card.owner.name === 'Denis Bitaev') {  
                const user = this.create(card.name, card.link, card._id, card.likes.length, this.cardLike, this.cardDislike, this.cardDelete).card;
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
            //like and dis
            if (event.target.classList.contains('place-card__like-icon')) {
                if (event.target.classList.contains('place-card__like-icon_liked')) {
                    this.dislike(event);
                } else {
                    this.like(event);
                }
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


