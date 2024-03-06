import models from '../models'

const { LoyaltyProgram, LoyaltyPolicy, LoyaltyBenefit } = models

function mapping(data = []) {
  return data.map((item) => {
    return {
      id: item.id,
      loyalty_name: item.loyalty_name,
      tier_name: item.tier_name,
      policy_name: item?.policy?.policy_name,
      benefit_name: item?.benefit?.benefit_name,
      type: item?.benefit?.type,
      value: item?.benefit?.value,
      created_at: item?.created_at,
      upadted_at: item?.updated_at,
    }
  })
}

async function List(req, res, next) {
  try {
    const loyaltyPrograms = await LoyaltyProgram.findAll({
      include: [
        {
          association: 'policy',
        },
        {
          association: 'benefit',
        },
      ],
    })
    res.json(mapping(loyaltyPrograms))
  } catch (err) {
    next(err)
  }
}

export default {
  List,
}
