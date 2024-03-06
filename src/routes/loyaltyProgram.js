import express from 'express'
import authController from '../controllers/authController'
import loyaltyProgramController from '../controllers/loyaltyProgramController'

const router = express.Router()

router.get('/', authController.VerifyToken, loyaltyProgramController.List)

export default router
