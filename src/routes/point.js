import express from 'express'
import authController from '../controllers/authController'
import pointController from '../controllers/pointController'

const router = express.Router()

router.post(
  '/:type',
  authController.VerifyToken,
  pointController.TransactionPoint,
)

export default router
