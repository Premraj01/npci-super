/** @format */

import asyncHandler from 'express-async-handler'
import Account from '../models/accountModel.js'
import generateToken from '../utils/generateToken.js'

let id = '5fe4b6eb15e8260a147b5f33'
//@desc   Authenticate UPI
//@router POST /api/users/userDetails
//@access Public

const authUPI = asyncHandler(async (req, res) => {
  const { upi } = req.body

  const account = await Account.findById(id)

  if (account && (await account.matchUPI(upi))) {
    res.json({
      _id: account._id,
      account_holder: account.account_holder,
      balanace: account.balanace,
      token: generateToken(account.id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid UPI')
  }
})

//@desc fetch Balance
//@route GET /api/account/balanace
//@access Public

const getBalanace = asyncHandler(async (req, res) => {
  const account = await Account.findById(id).select('balanace')

  res.json(account.balanace.toFixed(2))
})

//@desc update Balanace
//@route PUT /api/account/updateBalanace
//@access Public

const updateBalanace = asyncHandler(async (req, res) => {
  const account = await Account.findById(id).select('balanace')
  if (getBalanace) {
    account.balanace = req.body.updatedBalanace

    await account.save()
  } else {
    res.status(400)
    throw new Error('cannont update balanace')
  }
})

export { getBalanace, authUPI, updateBalanace }
