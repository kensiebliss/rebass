import mongojs from 'mongojs'

const { DB_URI } = process.env

export const mongo = mongojs(DB_URI)
