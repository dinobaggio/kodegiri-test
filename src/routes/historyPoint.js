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
router.get(
  '/report/:type/excel',
  authController.VerifyToken,
  historyPointController.ReportExcel,
)

router.get(
  '/report/:type/pdf',
  authController.VerifyToken,
  historyPointController.ReportPDF,
)

export default router
