import styled from "styled-components"
import Flex from "@primer/components/lib/Flex"

import { TopBar } from "./TopBar"

export function AppFrame(props) {
  return (
    <Container>
      <TopBar />
      {props.children}
    </Container>
  )
}

const Container = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background: #f7f8fa;
`
