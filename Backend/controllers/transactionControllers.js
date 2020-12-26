/** @format */

import asyncHandler from 'express-async-handler'
import Transaction from '../models/transactionModel.js'

//@desc  Create a new trancation
//@route POST /api/transction
//@access Public

const createTransaction = asyncHandler(async (req, res) => {
  const { userId, userName, userImage, amountSent } = req.body

  const transcation = await Transaction.create({
    userId,
    userName,
    userImage,
    amountSent,
  })
  if (transcation) {
    res.status(201).send('Transation successful..!!').json({
      _id: transcation._id,
    })
  } else {
    res.status(400)
    throw new Error('Transaction Failed')
  }
})

//@desc   get all transactions
//@router GET /api/users/userDetails
//@access Public

const getTransaction = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({})
  res.json(transactions)
})

export { createTransaction, getTransaction }
