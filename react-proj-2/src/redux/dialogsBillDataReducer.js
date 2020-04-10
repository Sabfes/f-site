const SWITCH_DIALOG = 'SWITCH-DIALOG'

let initialState = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Liza'},
    {id:3, name: 'Misha'}
]

export const dialogBillDataReducer = (state = initialState, action) => {
    switch(action.type){
        case SWITCH_DIALOG: 
            state.push({id:`${state.length + 1}`, name: action.name})
            return state
        default:
            return state
    }    
}

