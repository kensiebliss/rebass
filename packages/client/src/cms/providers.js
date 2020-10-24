import { ReactQueryCacheProvider } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"
import { client } from "./client"

export function ReactQueryProvider(props) {
  return (
    <ReactQueryCacheProvider queryCache={client.cache}>
      <ReactQueryDevtools initialIsOpen />
      {props.children}
    </ReactQueryCacheProvider>
  )
}

export function StateProvider(props) {
  return <ReactQueryProvider>{props.children}</ReactQueryProvider>
}
