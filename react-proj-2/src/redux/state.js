
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
            {id:1, text: 'asdasHi world!', likeConter: 55, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'}
        ],
    },
    _callSubscriber() {
    },
    getState(){
        return this._state
    },
    // addPost(postMsg) {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === 'ADD-POST') {
            this._state.dataBillPost.push({id:`${this._state.messagesData.length + 1}`, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png',text: action.postMsg, likeConter:0    })
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            this._state.messagesData.push({id:`${this._state.messagesData.length + 1}`, text: action.text})
            this._callSubscriber(this._state);
        }     
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: 'ADD-POST',
        postMsg: text,
    }
}
export const addMessageActionCreator = (text) => {
    return {
        type: 'ADD-MESSAGE',
        text: text,
    }
}
export default store