import { useQuery } from "react-query"
import { request } from "graphql-request"
import { AccountByAuthId } from "../queries/AccountByAuthId"
import { client } from "../client"

export function useUserAccount(authId) {
  const { status, data, error, isFetching } = useQuery("userAccount", async () => {
    const query = AccountByAuthId({ authId })
    const { account } = await client.request(query, { initialData: {} })
    console.log({ account })
    return account
  })

  return { status, data, error, isFetching }
}
