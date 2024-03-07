import models from '../models'
import { GenerateInvoiceNumber } from '../libs'
import { TYPE_COMMUNITY } from '../constants'

const { Transaction, Membership, LoyaltyProgram, Community } = models

async function firstPurchase(member_no) {
  const find = await Transaction.findOne({ where: { member_no }, raw: true })
  console.log(find)
  return !find
}

async function Add(req, res, next) {
  try {
    const { member_no, items } = req.body
    let { total_amount } = req.body

    let member = await Membership.findOne({ where: { member_no }, raw: true })
    if (!member) {
      return res.status(404).json({ message: 'data tidak ditemukan' })
    }
    const { name, phone_no, email } = member
    let lastId = await Transaction.max('id')
    let transaction_date = new Date()
    let prefix_id = 'TRINV'
    let transaction_id = GenerateInvoiceNumber(lastId + 1, prefix_id)

    let totalValueDisc = 0

    const lTransactionAmount = await LoyaltyProgram.TransactionAmount(
      total_amount,
      member_no,
      transaction_id,
    )
    totalValueDisc += lTransactionAmount.total_value_disc

    const isFirstPurchase = await firstPurchase(member_no)
    if (isFirstPurchase) {
      const first = await LoyaltyProgram.FirstPurchase(
        total_amount,
        member_no,
        transaction_id,
      )
      totalValueDisc += first.total_value_disc
    }

    total_amount -= totalValueDisc

    let transaction = await Transaction.create({
      member_no,
      items,
      total_amount,
      name,
      phone_no,
      email,
      transaction_date,
      transaction_id,
      prefix_id,
    })

    await Community.create({
      type: TYPE_COMMUNITY.MEMBER_ACTIVITY,
      member_no: member.id,
      name: member.name,
      phone_no: member.phone_no,
      email: member.email,
      transaction_id: transaction_id,
      transaction_date: new Date(),
      activity_name: 'Purchase Item',
    })

    res.json(transaction)
  } catch (err) {
    next(err)
  }
}

export default {
  Add,
}
