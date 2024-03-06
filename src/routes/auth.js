import express from 'express'
import authController from '../controllers/authController'

const router = express.Router()

router.post('/sign-in', authController.SignIn)

export default router
