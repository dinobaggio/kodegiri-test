import { BENEFIT, STATUS_MEMBERSHIP, TYPE_POIN } from '../constants'
import { GenerateInvoiceNumber, GenerateRandomString } from '../libs'
import models from '../models'

const { Membership, LoyaltyProgram, Transaction, HistoryPoint } = models

async function List(req, res, next) {
  try {
    const memberships = await Membership.findAll({
      raw: true,
      attributes: [
        'member_no',
        'name',
        'email',
        'phone_no',
        'join_date',
        'remained_point',
        'status',
      ],
    })
    res.json(memberships)
  } catch (err) {
    next(err)
  }
}

async function Detail(req, res, next) {
  try {
    const { id } = req.params
    const member = await Membership.findOne({ where: { id }, raw: true })
    if (member) {
      res.json(member)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (err) {
    next(err)
  }
}

async function Register(req, res, next) {
  try {
    const { referral, name, email, phone_no, birth_date, address, join_date } =
      req.body

    if (referral) {
      const memberReferral = await Membership.findOne({ where: { referral } })
      if (!memberReferral) {
        return res
          .status(404)
          .json({ message: 'referral user tidak ditemukan' })
      }
      await LoyaltyProgram.GetMember(memberReferral)
    }

    const count = await Membership.count()

    const newMembership = await Membership.create({
      name,
      email,
      phone_no,
      birth_date,
      address,
      join_date,
      member_no: count + 1,
      status: STATUS_MEMBERSHIP.ACTIVE,
      referral: GenerateRandomString(6),
    })

    res.json(newMembership)
  } catch (err) {
    next(err)
  }
}

export default {
  List,
  Detail,
  Register,
}
