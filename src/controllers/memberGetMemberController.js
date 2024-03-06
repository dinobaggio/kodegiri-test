import models from '../models'

const { Membership, MemberGetMember } = models

async function AddMember(req, res, next) {
  try {
    const { member_no, persons, transaction_date, transaction_id } = req.body
    const member = await Membership.findOne({ where: { member_no }, raw: true })
    if (!member) {
      return res.satus(404).json({ message: 'Member tidak ditemukan' })
    }

    const mGetMember = await MemberGetMember.create({
      member_no,
      name: member.name,
      phone_no: member.phone_no,
      email: member.email,
      persons,
      transaction_date,
      transaction_id,
    })

    res.json(mGetMember)
  } catch (err) {
    next(err)
  }
}

export default {
  AddMember,
}
