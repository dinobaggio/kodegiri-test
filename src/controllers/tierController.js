import models from '../models'

const { Tier } = models

async function List(req, res, next) {
  try {
    const tiers = await Tier.findAll({ raw: true })
    res.json(tiers)
  } catch (err) {
    next(err)
  }
}

async function Create(req, res, next) {
  try {
    const { tier_name, min_poin, max_poin } = req.body
    const newTier = await Tier.create({ tier_name, min_poin, max_poin })
    res.status(201).json(newTier)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Gagal membuat tier baru', error: error.message })
  }
}

async function Update(req, res, next) {
  try {
    const { id } = req.params
    const { tier_name, min_poin, max_poin } = req.body
    await Tier.update({ tier_name, min_poin, max_poin }, { where: { id } })
    res.status(200).json('Berhasil menperbahrui tier')
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Gagal memperbarui tier', error: error.message })
  }
}

async function DeleteTier(req, res, next) {
  try {
    const { id } = req.params
    await Tier.destroy({ where: { id } })
    res.status(200).json({ message: 'Tier berhasil dihapus' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Gagal menghapus tier', error: error.message })
  }
}

export default {
  List,
  Create,
  Update,
  DeleteTier,
}
