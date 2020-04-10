import {dataBillPostReducer} from './dataBillPost'
import {messagesDataReducer} from './messagesData' 

let store = {
    _state : {},
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
        this._state.dataBillPost = dataBillPostReducer(this._state.dataBillPost, action)
        this._state.messagesData = messagesDataReducer(this._state.messagesData, action)
        this._callSubscriber(this._state);   
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