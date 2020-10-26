import NextLink from "next/link"
import { useRouter } from "next/router"
import PrimerLink from "@primer/components/lib/Link"

export function Link(props) {
  const router = useRouter()

  const onClick = () => {
    router.push(props.href)
  }

  return <PrimerLink {...props} onClick={props.onClick || onClick} />
}

Link.defaultProps = {
  onClick: () => {},
}
