/** @format */

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const accountSchema = mongoose.Schema(
  {
    account_holder: {
      type: String,
      required: true,
    },
    balanace: {
      type: Number,
      required: true,
    },
    UPI: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

accountSchema.methods.matchUPI = async function (enteredUPI) {
  return await bcrypt.compare(enteredUPI, this.UPI)
}

accountSchema.pre('save', async function (next) {
  if (!this.isModified('UPI')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.UPI = await bcrypt.hash(this.UPI, salt)
})

const Account = mongoose.model('Account', accountSchema)

export default Account
