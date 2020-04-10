const ADD_POST = 'ADD-POST'

let initialState = [
    {
        id:1, 
        text: 'asdasHi world!', 
        likeConter: 55, 
        img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png'
    }
]

export const dataBillPostReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            state.push({id:`${state.length + 1}`, img: 'https://manshet.org/templates/teensy/dleimages/noavatar.png',text: action.postMsg, likeConter:0    })
            return state
        default:
            return state
    }
}