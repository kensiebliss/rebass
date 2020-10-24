import { auth } from "../../../utilities/auth"

export default async function AuthLogin(req, res) {
  try {
    await auth.handleLogin(req, res, { redirectTo: "/" })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
