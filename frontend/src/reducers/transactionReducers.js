/** @format */

import {
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_SAVE_REQUEST,
  TRANSACTION_SAVE_SUCCESS,
  TRANSACTION_SAVE_FAIL,
} from '../constants/transactionConstants'

export const getTransactionReducer = (state = { transactions: [] }, action) => {
  switch (action.type) {
    case TRANSACTION_DETAILS_REQUEST:
      return { loading: true, transactions: [] }
    case TRANSACTION_DETAILS_SUCCESS:
      return { loading: false, transactions: action.payload }
    case TRANSACTION_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const saveTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_SAVE_REQUEST:
      return { loading: true }
    case TRANSACTION_SAVE_SUCCESS:
      return { loading: false, savedTransaction: action.payload }
    case TRANSACTION_SAVE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
