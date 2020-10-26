import "isomorphic-fetch"
import { Auth0Provider } from "@auth0/auth0-react"

import { BaseStyles } from "@primer/components"
import { StateProvider } from "../cms/providers"
import { AppFrame } from "../comps/AppFrame"
import { PROVIDER_PROPS } from "../consts/auth0"
import * as React from "react"

class MyErrorBoundary extends React.Component {
  componentDidCatch(foo) {
    // logic
    console.log({ foo })
  }

  render() {
    return this.props.children
  }
}

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

const Wrapper = (props) => {
  return (
    <Auth0Provider {...PROVIDER_PROPS}>
      <StateProvider>
        <BaseStyles>
          <AppFrame>{props.children}</AppFrame>
        </BaseStyles>
      </StateProvider>
    </Auth0Provider>
  )
}
