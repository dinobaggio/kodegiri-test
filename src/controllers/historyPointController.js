import { Op } from 'sequelize'
import models from '../models'
import moment from 'moment'

const { HistoryPoint } = models

async function Report(req, res, next) {
  try {
    const { member_no, start_date, end_date, loyalty_name, name } = req.query
    const condition = {}

    if (member_no) {
      condition['member_no'] = member_no
    }

    if (start_date && end_date) {
      condition['created_at'] = {
        [Op.between]: [
          moment(start_date, 'YYYY-MM-DD').startOf('day'),
          moment(end_date, 'YYYY-MM-DD').endOf('day'),
        ],
      }
    } else if (start_date) {
      condition['created_at'] = {
        [Op.gte]: moment(start_date, 'YYYY-MM-DD').startOf('day'),
      }
    } else if (end_date) {
      condition['created_at'] = {
        [Op.lte]: moment(end_date, 'YYYY-MM-DD').endOf('day'),
      }
    }

    if (loyalty_name) {
      condition['loyalty_name'] = {
        [Op.like]: `%${loyalty_name}%`,
      }
    }

    if (name) {
      condition['$member.name$'] = {
        [Op.like]: `%${name}%`,
      }
    }

    const histories = await HistoryPoint.findAll({
      where: condition,
      include: [{ association: 'member', attributes: ['name'] }],
    })

    res.json(
      histories.map((item) => {
        const member = item.member
        delete item.dataValues.member
        return {
          ...item.dataValues,
          member_name: member.name,
        }
      }),
    )
  } catch (err) {
    next(err)
  }
}

export default {
  Report,
}
