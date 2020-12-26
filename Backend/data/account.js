/** @format */

import bcrypt from 'bcryptjs'

const account = {
  account_holder: 'Admin',
  balanace: 10000,
  UPI: bcrypt.hashSync('123456', 10),
}

export default account
