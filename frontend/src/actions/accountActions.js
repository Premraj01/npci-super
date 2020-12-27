/** @format */

import axios from 'axios'
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

export const getAccountInfo = () => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNT_INFO_REQUEST })

    const data = await axios.get('/api/account')

    dispatch({
      type: ACCOUNT_INFO_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addMoneyAcc = (amount, token) => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNT_ADD_MONEY_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const data = await axios.put('/api/account/addMoney', { amount }, config)

    dispatch({
      type: ACCOUNT_ADD_MONEY_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_ADD_MONEY_FAIL,
    })
  }
}

export const getAccBalanace = () => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNT_BALANACE_REQUEST })

    const data = await axios.get('/api/account/balanace')

    dispatch({
      type: ACCOUNT_BALANACE_SUCCESS,
      payload: data.data,
    })

    localStorage.setItem('Account_balanace', JSON.stringify(data.data))
  } catch (error) {
    dispatch({
      type: ACCOUNT_BALANACE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUPIInfo = (upi) => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNT_UPI_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/account/upi', { upi }, config)

    dispatch({
      type: ACCOUNT_UPI_SUCCESS,
      payload: data,
    })
    if (data) {
      localStorage.setItem('UPI', JSON.stringify(true))
    }
  } catch (error) {
    dispatch({
      type: ACCOUNT_UPI_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBalanace = (updatedBalanace) => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNT_BALANACE_UPDATE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      '/api/account/balanace',
      { updatedBalanace },
      config
    )

    dispatch({
      type: ACCOUNT_BALANACE_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_BALANACE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
