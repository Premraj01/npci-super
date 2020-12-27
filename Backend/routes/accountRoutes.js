/** @format */

import express from 'express'
const router = express.Router()
import {
  getBalanace,
  authUPI,
  updateBalanace,
  getAccount,
  addMoney,
} from '../controllers/accountController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getAccount)
router.put('/addmoney', protect, addMoney)
router.route('/balanace').get(getBalanace).put(updateBalanace)
router.post('/upi', authUPI)

export default router
