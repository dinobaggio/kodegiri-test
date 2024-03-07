import express from 'express'
import authRouter from './auth'
import membershipRouter from './membership'
import transactionRouter from './transaction'
import tierRouter from './tier'
import loyaltyProgramRouter from './loyaltyProgram'
import pointRouter from './point'

const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index.hbs')
})

router.use('/auth', authRouter)
router.use('/membership', membershipRouter)
router.use('/transaction', transactionRouter)
router.use('/tier', tierRouter)
router.use('/loyalty-program', loyaltyProgramRouter)
router.use('/point', pointRouter)

export default router
