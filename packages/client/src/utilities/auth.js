// import { initAuth0 } from "@auth0/nextjs-auth0"

// export const auth = initAuth0({
//   domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
//   clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
//   clientSecret: process.env.GRAPHCMS_API_ENDPOINT,

//   scope: "openid profile",
//   redirectUri: "http://localhost:3000/api/callback",
//   postLogoutRedirectUri: "http://localhost:3000/",

//   session: {
//     cookieSecret: "rebass-auth0",
//     cookieLifetime: 60 * 60 * 24,
//     storeIdToken: true,
//     storeAccessToken: true,
//     storeRefreshToken: true,
//   },

//   oidcClient: {
//     httpTimeout: 3000,
//     clockTolerance: 10000,
//   },
// })

// // export function refreshToken() {
// //   const tokenCache = auth0.tokenCache(req, res);
// //   const { accessToken } = await tokenCache.getAccessToken();
// //   return accessToken
// // }
