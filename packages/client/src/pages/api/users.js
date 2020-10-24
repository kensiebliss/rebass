import { mongo } from "@kensie/bottles/services"

const users = mongo.collection("users")

export default (req, res) => {
  res.statusCode = 200

  return users.find((err, docs) => {
    res.json({ docs })
  })
}
