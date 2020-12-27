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
  ACCOUNT_INFO_REQUEST,
  ACCOUNT_INFO_SUCCESS,
  ACCOUNT_INFO_FAIL,
  ACCOUNT_ADD_MONEY_REQUEST,
  ACCOUNT_ADD_MONEY_SUCCESS,
  ACCOUNT_ADD_MONEY_FAIL,
} from '../constants/accountConstants'

export const getAccountReducer = (state = { account: {} }, action) => {
  switch (action.type) {
    case ACCOUNT_INFO_REQUEST:
      return { loading: true, account: {} }
    case ACCOUNT_INFO_SUCCESS:
      return { loading: false, account: action.payload }
    case ACCOUNT_INFO_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const addMoneyReducer = (state = { responce: {} }, action) => {
  switch (action.type) {
    case ACCOUNT_ADD_MONEY_REQUEST:
      return { loading: true, responce: {} }
    case ACCOUNT_ADD_MONEY_SUCCESS:
      return { loading: false, responce: action.payload }
    case ACCOUNT_ADD_MONEY_FAIL:
      return { loading: false }

    default:
      return state
  }
}

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
