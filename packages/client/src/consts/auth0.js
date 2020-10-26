export const PROVIDER_PROPS = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  redirectUri: "http://localhost:3000/auth/callback",
}
