import { useAuth } from "../hooks/useAuth"
import { PresetDetails } from "../comps/PresetDetails"

export default function Home() {
  const stuff = useAuth()
  console.log(stuff)

  return (
    <div>
      <div style={{ padding: "48px 24px" }}>
        <PresetDetails />
      </div>
    </div>
  )
}
