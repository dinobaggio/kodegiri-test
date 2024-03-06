import express from 'express'
import authController from '../controllers/authController'
import transactionController from '../controllers/transactionController'

const router = express.Router()

router.post('/', authController.VerifyToken, transactionController.Add)

export default router
