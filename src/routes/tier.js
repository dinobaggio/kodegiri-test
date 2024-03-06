import express from 'express'
import authController from '../controllers/authController'
import tierController from '../controllers/tierController'

const router = express.Router()

router.get('/', authController.VerifyToken, tierController.List)
router.post('/', authController.VerifyToken, tierController.Create)
router.put('/:id', authController.VerifyToken, tierController.Update)
router.delete('/:id', authController.VerifyToken, tierController.DeleteTier)

export default router
