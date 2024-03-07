import { TYPE_POIN } from '../constants'
import { GenerateInvoiceNumber } from '../libs'
import models from '../models'

const { HistoryPoint, Membership, Transaction } = models

async function TransactionPoint(req, res, next) {
  try {
    const { type } = req.params
    const { member_no, value } = req.body

    let member = await Membership.findOne({ where: { member_no }, raw: true })

    if (!member) {
      return res.status(400).json({ message: 'member tidak ditemukan' })
    }

    let lastId = await Transaction.max('id')
    let transaction_date = new Date()
    let prefix_id = 'TRPNT'
    let transaction_id = GenerateInvoiceNumber(lastId + 1, prefix_id)

    if (type === TYPE_POIN.EARNED) {
      await HistoryPoint.create({
        transaction_id,
        member_no: member.id,
        transaction_date: new Date(),
        type: TYPE_POIN.EARNED,
        existing_poin: member.remained_point,
        earned_poin: Number(value),
        balance_poin: member.remained_point + Number(value),
      })
      await Membership.update(
        {
          earned_point: member.earned_point + Number(value),
          remained_point: member.remained_point + Number(value),
        },
        {
          where: { id: member.id },
        },
      )
    } else if (type === TYPE_POIN.REDEEMED) {
      await HistoryPoint.create({
        transaction_id,
        member_no: member.id,
        transaction_date: new Date(),
        type: TYPE_POIN.REDEEMED,
        existing_poin: member.remained_point,
        earned_poin: -Number(value),
        balance_poin: member.remained_point - Number(value),
      })
      await Membership.update(
        {
          redeemed_point: member.redeemed_point + Number(value),
          remained_point: member.remained_point - Number(value),
        },
        {
          where: { id: member.id },
        },
      )
    }

    await Transaction.create({
      member_no,
      name: member.name,
      phone_no: member.phone_no,
      email: member.email,
      transaction_date,
      transaction_id,
      prefix_id,
    })
    member = await Membership.findOne({ where: { member_no }, raw: true })
    res.json(member)
  } catch (err) {
    next(err)
  }
}

export default {
  TransactionPoint,
}
