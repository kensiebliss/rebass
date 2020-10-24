import { GraphQLClient } from "graphql-request"
import { QueryCache } from "react-query"

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT
const AUTH_TOKEN = process.env.NEXT_PUBLIC_GRAPHCMS_PROD_AUTH_TOKEN

export const client = new GraphQLClient(ENDPOINT, {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
})

client.cache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
