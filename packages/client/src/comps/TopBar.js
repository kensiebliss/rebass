import styled from "styled-components"
import Button from "@atlaskit/button"
import Avatar from "@atlaskit/avatar"
import InlineDialog from "@atlaskit/inline-dialog"
import Link from "next/link"
import { useAuth } from "../hooks/useAuth"

export function TopBar(props) {
  const auth = useAuth()

  return (
    <Container>
      <InnerContainer>
        <LogoContainer>
          <Logo src='/images/rebass-logo-0.svg' alt='rebass logo' />
        </LogoContainer>
        <LinksContainer>
          <Link href='/'>
            <Button appearance='link'>Home</Button>
          </Link>
          <Link href='/account'>
            <Button appearance='link'>Hot Presets</Button>
          </Link>
          <AuthSection auth={auth} />
        </LinksContainer>
      </InnerContainer>
    </Container>
  )
}

function AuthSection(props) {
  const [isMenuOpen, toggleMenuOpen] = React.useState(false)

  if (props.auth.isAuthenticated) {
    return <Avatar size='small' onClick={() => toggleMenuOpen(!isMenuOpen)} />
  }

  return (
    <Button appearance='link' onClick={() => props.auth.loginWithRedirect()}>
      Sign In
    </Button>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  background: #fafbfd;
  border-bottom: 1px solid #e9eaeb;
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  max-width: 120px;
`

const Logo = styled.img`
  max-width: 120px;
`

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: fit-content;
  position: relative;

  button {
    margin-left: 24px;
  }
`
