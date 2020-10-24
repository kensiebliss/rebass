import Button from "@atlaskit/button"
import { useAuth } from "../hooks/useAuth"

export default function Home() {
  const stuff = useAuth()

  return (
    <div>
      <h1>Welcome</h1>
      <a href='/api/login'>Login</a>
      <Button appearance='primary'>Click Here</Button>
    </div>
  )
}
