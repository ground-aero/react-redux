// import {createStore} from "redux";
import {legacy_createStore as createStore, combineReducers} from "redux"
import {configureStore} from '@reduxjs/toolkit'
import {usersReducer} from "./usersReducer"
import {cashReducer} from "./cashReducer"
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly"

const rootReducer = combineReducers({
    cashReducer, // можем назвать редьюсер просто как 'cash' (через ключ: значение)
    usersReducer
})

// initialise store
// export const store = configureStore({reducer: rootReducer})
export const store = configureStore({reducer: rootReducer})