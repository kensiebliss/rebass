import styled from "styled-components"
import { TopBar } from "./TopBar"

export function AppFrame(props) {
  return (
    <Container>
      <TopBar />
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`
