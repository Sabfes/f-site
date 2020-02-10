class CardList {
    constructor(container, element) {
        this.container = container;
        this.element = element;
        this.render();
    }
    addCard(child) { 
        this.container.appendChild(child);
    }
    render() {
        this.element.forEach(element => {
            const user = new Card(element.name, element.link);
            this.addCard(user.card);
        });
    }
}


