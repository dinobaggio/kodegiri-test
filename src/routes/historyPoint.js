import express from 'express'
import authController from '../controllers/authController'
import loyaltyProgramController from '../controllers/loyaltyProgramController'
import historyPointController from '../controllers/historyPointController'

const router = express.Router()

router.get(
  '/report/:type',
  authController.VerifyToken,
  historyPointController.Report,
)

export default router
