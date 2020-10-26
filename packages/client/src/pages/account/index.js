import Button from "@primer/components/lib/Button"
import { useUserAccount } from "../../cms/hooks/useUserAccount"

export default function Account() {
  // const userAccount = useUserAccount("auth0|5f91a4bc863fab0076344b6a")

  return (
    <div>
      <h1>Welcome to Account</h1>
      <Button appearance='primary'>Click Here</Button>
    </div>
  )
}
