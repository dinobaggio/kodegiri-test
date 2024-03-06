require('dotenv').config()

export const SECRET_KEY = process.env.SECRET_KEY || 'secret_key'

export const STATUS_MEMBERSHIP = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

export const BENEFIT = {
  MEMBER_GET_MEMBER: 'member_get_member',
}

export const TYPE_BENEFIT = {
  FIXED_POINT: 'fixed point',
  PERCENTAGE: 'percentage',
}

export const TYPE_POIN = {
  REDEEMED: 'redeemed',
  EARNED: 'earned',
}

export const TYPE_COMMUNITY = {
  MEMBER_GET_MEMBER: 'member_get_member',
  MEMBER_ACTIVITY: 'member_activity',
}
