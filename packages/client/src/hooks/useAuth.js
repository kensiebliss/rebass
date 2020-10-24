import { useAuth0 } from "@auth0/auth0-react"

export function useAuth() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0()

  return {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  }
}
