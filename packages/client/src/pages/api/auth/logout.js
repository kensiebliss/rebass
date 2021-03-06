import { auth } from "../../../utils/auth"

export default async function logout(req, res) {
  try {
    await auth.handleLogout(req, res, { returnTo: "/" })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
