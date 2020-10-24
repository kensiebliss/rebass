import { useQuery, useQueryCache } from "react-query"
import { request, gql } from "graphql-request"

export function AccountByAuthId(params) {
  return gql`
    query AccountByAuthId {
      account(where: {authId: "${params.authId}"}) {
        id
        authId
        firstName
        lastName
        emailAddress
      }
    }
  `
}
