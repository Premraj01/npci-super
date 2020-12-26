/** @format */

import express from 'express'
const router = express.Router()
import {
  getBalanace,
  authUPI,
  updateBalanace,
} from '../controllers/accountController.js'

router.route('/balanace').get(getBalanace).put(updateBalanace)
router.post('/upi', authUPI)

export default router
