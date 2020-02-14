class CardList {
    constructor(container, element, create, likeFunc, removeFunc, openImgFunc) {
        this.container = container;
        this.element = element;
        this.create = create;
        this.like = likeFunc;
        this.remove = removeFunc;
        this.opemImg = openImgFunc;
        this.eventListener();
        this.render();
    }
    addCard(child) {
        this.container.appendChild(child);
    }
    render() {
        this.element.forEach(element => {
            const user = this.create(element.name, element.link).card;
            this.addCard(user);
        });
    }
    eventListener() {
        /** REVIEW: Можно лучше:
        *   CardList не должен знать о реализации Card(какая внутри разметка, названия css-классов)
        **/
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
}


