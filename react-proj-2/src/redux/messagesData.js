const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = [
    {id:1, text: 'Hi world!'},
    {id:2, text: 'Hi world!2e123'},
    {id:3, text: 'asdasHi world!'}
]

export const messagesDataReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: 
            state.push({id:`${state.length + 1}`, text: action.text})
            return state
        default:
            return state
    }
    
}