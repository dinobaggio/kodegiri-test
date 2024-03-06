import models from '../models'
import { GenerateInvoiceNumber } from '../libs'

const { Transaction, Membership } = models

async function Add(req, res, next) {
  try {
    const { member_no, items, total_amount } = req.body
    let member = await Membership.findOne({ where: { member_no }, raw: true })
    if (!member) {
      return res.status(404).json({ message: 'data tidak ditemukan' })
    }
    const { name, phone_no, email } = member
    let count = await Transaction.count()
    let transaction_date = new Date()
    let prefix_id = 'TRINV'
    let transaction_id = GenerateInvoiceNumber(count + 1, prefix_id)

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

    res.json(transaction)
  } catch (err) {
    next(err)
  }
}

export default {
  Add,
}
