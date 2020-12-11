import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'
import usersReducer from "./usersReducer"
import apiUsersReducers from "./apiUsersReducers"
const rootReducer = combineReducers({
    users: usersReducer,
    api: apiUsersReducers
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;