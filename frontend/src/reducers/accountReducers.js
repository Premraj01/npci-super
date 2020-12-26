/** @format */

import {
  ACCOUNT_BALANACE_REQUEST,
  ACCOUNT_BALANACE_SUCCESS,
  ACCOUNT_BALANACE_FAIL,
  ACCOUNT_UPI_REQUEST,
  ACCOUNT_UPI_SUCCESS,
  ACCOUNT_UPI_FAIL,
  ACCOUNT_BALANACE_UPDATE_REQUEST,
  ACCOUNT_BALANACE_UPDATE_SUCCESS,
  ACCOUNT_BALANACE_UPDATE_FAIL,
} from '../constants/accountConstants'

export const getBalanaceReducer = (state = { balanace: '' }, action) => {
  switch (action.type) {
    case ACCOUNT_BALANACE_REQUEST:
      return { loading: true }
    case ACCOUNT_BALANACE_SUCCESS:
      return { loading: false, balanace: action.payload }
    case ACCOUNT_BALANACE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const getUPIReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_UPI_REQUEST:
      return { loading: true }
    case ACCOUNT_UPI_SUCCESS:
      return { loading: false, UPI: action.payload }
    case ACCOUNT_UPI_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const updateBalanaceReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_BALANACE_UPDATE_REQUEST:
      return { loading: true }
    case ACCOUNT_BALANACE_UPDATE_SUCCESS:
      return { loading: false, updatedBalanace: action.payload }
    case ACCOUNT_BALANACE_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
