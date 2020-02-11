class CardList {
    constructor(container, element, create, like, remove, opemImg) {
        this.container = container;
        this.element = element;
        this.create = create;
        this.like = like;
        this.remove = remove;
        this.openImg = opemImg;
        this.render();
    }
    addCard(child) { 
        this.container.appendChild(child);
    }
    render() {
        this.element.forEach(element => {
            const user = this.create(element.name, element.link);
            user.addEventListener('click', this.like);
            user.addEventListener('click', this.remove);
            user.addEventListener('click', this.openImg);
            this.addCard(user);
        });
    }
}


