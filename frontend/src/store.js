/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer } from './reducers/userReducers'
import {
  getBalanaceReducer,
  getUPIReducer,
  updateBalanaceReducer,
} from './reducers/accountReducers'
import {
  getTransactionReducer,
  saveTransactionReducer,
} from './reducers/transactionReducers'

const reducer = combineReducers({
  userList: userListReducer,
  getBalanace: getBalanaceReducer,
  getUPI: getUPIReducer,
  getTransaction: getTransactionReducer,
  saveTransaction: saveTransactionReducer,
  updateBalanace: updateBalanaceReducer,
})

const initialState = {} //Anything that has to be load Initially(when application loads), Should be put in the here

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
