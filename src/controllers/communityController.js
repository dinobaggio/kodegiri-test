import models from '../models'

const { Community } = models

async function List(req, res, next) {
  try {
    const communities = await Community.findAll({ raw: true })

    res.json(communities)
  } catch (err) {
    next(err)
  }
}

export default {
  List,
}
