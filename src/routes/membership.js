import express from 'express'
import membershipController from '../controllers/membershipController'
import authController from '../controllers/authController'

const router = express.Router()

router.get('/', authController.VerifyToken, membershipController.List)
router.get('/:id', authController.VerifyToken, membershipController.Detail)
router.post(
  '/register',
  authController.VerifyToken,
  membershipController.Register,
)

export default router
