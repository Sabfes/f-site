import { createStore, combineReducers } from "redux";
import {dataBillPostReducer} from './dataBillPost'
import {messagesDataReducer} from './messagesData'
import {dialogBillDataReducer} from './dialogsBillDataReducer'

let reducers = combineReducers({dataBillPostReducer,messagesDataReducer, dialogBillDataReducer})

let store = createStore(reducers)

export default store