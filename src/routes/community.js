import express from 'express'
import authController from '../controllers/authController'
import communityController from '../controllers/communityController'

const router = express.Router()

router.get('/', authController.VerifyToken, communityController.List)

export default router
