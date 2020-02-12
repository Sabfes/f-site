class CardList {
    constructor(container, element, create, openImg) {
        this.container = container;
        this.element = element;
        this.create = create;
        this.openImg = openImg;
        this.render();
    }   
    addCard(child) {
        this.container.appendChild(child);
    }
    render() {
        this.element.forEach(element => {
            const user = this.create(element.name, element.link, popupStart.openImg);
            this.addCard(user);
        });
    }
}


