/** @format */

import mongoose from 'mongoose'
import User from './models/userModel.js'
import users from './data/users.js'
import account from './data/account.js'
import Account from './models/accountModel.js'
import dotenv from 'dotenv'
import Transaction from './models/transactionModel.js'
import transaction from './data/transcation.js'
import connctDB from './config/db.js'

dotenv.config()

connctDB()

const importData = async () => {
  try {
    // await User.deleteMany()
    // await Account.deleteMany()
    await Transaction.deleteMany()

    // await User.insertMany(users)
    // await Account.insertMany(account)
    await Transaction.insertMany(transaction)

    console.log('Data imported...!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

// const destroyData = async () => {
//   try {
//     await Teams.deleteMany()

//     console.log('Data destroyed...!')
//     process.exit()
//   } catch (error) {
//     console.log(`${error}`)
//     process.exit(1)
//   }
// }

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
