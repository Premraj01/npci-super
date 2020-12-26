/** @format */

import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    amountSent: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction
