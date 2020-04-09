let store = {
    _state : {
        dialogsData: [
            {id:1, name: 'Dima'},
            {id:2, name: 'Liza'},
            {id:3, name: 'Misha'}
        ],
        messagesData : [
            {id:1, text: 'Hi world!'},
            {id:2, text: 'Hi world!2e123'},
            {id:3, text: 'asdasHi world!'}
        ],
        dataBillPost : [
            {id:1, text: 'Hi world!', likeConter: 12, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'},
            {id:2, text: 'Hi world!2e123', likeConter: 2, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'},
            {id:3, text: 'asdasHi world!', likeConter: 55, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'}
        ],
    },
    _callSubscriber() {
    },
    getState(){
        return this._state
    },
    addPost(postMsg) {
        this._state.dataBillPost.push({id:`${this._state.messagesData.length + 1}`, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png',text: postMsg, likeConter:0    })
        this._callSubscriber(this._state); 
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store