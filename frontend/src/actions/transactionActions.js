/** @format */

import axios from 'axios'
import {
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
  TRANSACTION_DETAILS_FAIL,
  TRANSACTION_SAVE_REQUEST,
  TRANSACTION_SAVE_SUCCESS,
  TRANSACTION_SAVE_FAIL,
} from '../constants/transactionConstants'

export const getTransactions = () => async (dispatch) => {
  try {
    dispatch({ type: TRANSACTION_DETAILS_REQUEST })

    const { data } = await axios.get('/api/transactions')

    dispatch({
      type: TRANSACTION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRANSACTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const saveTransaction = (
  userId,
  userName,
  userImage,
  amountSent
) => async (dispatch) => {
  try {
    dispatch({ type: TRANSACTION_SAVE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/transactions',
      { userId, userName, userImage, amountSent },
      config
    )

    dispatch({
      type: TRANSACTION_SAVE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRANSACTION_SAVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
