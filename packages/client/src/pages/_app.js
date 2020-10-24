import "isomorphic-fetch"
import "@atlaskit/css-reset/dist/bundle.css"
import { Reset } from "@atlaskit/theme"
import { StateProvider } from "../cms/providers"
import { Auth0Provider } from "@auth0/auth0-react"
import { AppFrame } from "../comps/AppFrame"

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={"http://localhost:3000/auth/callback"}
    >
      <StateProvider>
        <Reset>
          <AppFrame>
            <Component {...pageProps} />
          </AppFrame>
        </Reset>
      </StateProvider>
    </Auth0Provider>
  )
}
