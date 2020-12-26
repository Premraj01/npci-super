/** @format */

import express from 'express'
const router = express.Router()
import {
  createTransaction,
  getTransaction,
} from '../controllers/transactionControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getTransaction).post(createTransaction)
export default router
