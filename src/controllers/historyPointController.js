import models from '../models'

const { HistoryPoint } = models

async function Report(req, res, next) {
  try {
    const {
      member_no,
      start_date,
      end_date,
      loyalty_name,
      name,
      value_start,
      value_end,
    } = req.query
    const histories = await HistoryPoint.findAll()

    res.json(histories)
  } catch (err) {
    next(err)
  }
}

export default {
  Report,
}
