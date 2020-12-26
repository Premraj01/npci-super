/** @format */

import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

//@desc   get all users
//@router GET /api/users/userDetails
//@access Public

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export { getUsers }
