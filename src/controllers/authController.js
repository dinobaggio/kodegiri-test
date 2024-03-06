import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constants'
import models from '../models'

const { User } = models

async function SignIn(req, res, next) {
  try {
    const { email, password, remember_me } = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Validasi password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: 'Invalid password format' })
    }

    const user = await User.findOne({
      where: { email },
      raw: true,
    })

    const match = await bcrypt.compare(password, user.password)

    delete user.password

    if (user && match) {
      const token = jwt.sign({ email, name: user.name }, SECRET_KEY, {
        expiresIn: remember_me ? '7d' : '1h',
      })

      if (remember_me) {
        res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000 }) // Token berlaku selama 7 hari
      }

      res.json({ token })
    } else {
      res.status(401).json({ message: 'Password atau user tidak ditemukan' })
    }
  } catch (err) {
    next(err)
  }
}

function VerifyToken(req, res, next) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Bearer token required' })
  }

  let token = authorizationHeader.split(' ')[1]

  // if (req.cookies.token) {
  //   token = req.cookies.token
  // }

  if (!token) {
    return res.status(403).json({ message: 'Token required' })
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' })
      } else {
        return res.status(401).json({ message: 'Unauthorized' })
      }
    }

    req.user = decoded
    next()
  })
}

export default {
  SignIn,
  VerifyToken,
}
