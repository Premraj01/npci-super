/** @format */

import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import Account from '../models/accountModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.account = await Account.findById(decoded.id).select('-UPI')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not Authorized , Token has failed')
    }
  }
})
export { protect }
