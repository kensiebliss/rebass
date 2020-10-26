import styled from "styled-components"
import { Link } from "./common/Link"
import NextLink from "next/link"
import Avatar from "@primer/components/lib/Avatar"
import Button from "@primer/components/lib/Button"
import Grid from "@primer/components/lib/Grid"
import Box from "@primer/components/lib/Box"
import Header from "@primer/components/lib/Header"

import { useAuth } from "../hooks/useAuth"

export function TopBar(props) {
  const auth = useAuth()

  return (
    <Header>
      <Header.Item>
        <Logo src='/images/rebass-logo-1.svg' alt='rebass logo' />
      </Header.Item>
      <Header.Item full>
        <Grid gridTemplateColumns='repeat(5, auto)' gridGap={3} pl={40}>
          <Header.Link>Home</Header.Link>
          <Header.Link>Presets</Header.Link>
          <Header.Link>Stories</Header.Link>
          <Header.Link>Users</Header.Link>
          <Header.Link>Support</Header.Link>
        </Grid>
      </Header.Item>
      {/* <HeaderItemLink text='Home' /> */}
      <Header.Item mr={0}>
        <Avatar src='https://github.com/octocat.png' size={20} square alt='@octocat' />
      </Header.Item>
    </Header>
  )
}

const HeaderItemLink = (props) => {
  const { text, ...otherProps } = props

  return (
    <Header.Item {...otherProps}>
      <Header.Link>{props.text}</Header.Link>
    </Header.Item>
  )
}

function AuthSection(props) {
  const [isMenuOpen, toggleMenuOpen] = React.useState(false)
  const toggleMenu = () => toggleMenuOpen(!isMenuOpen)
  const logIn = () => props.auth.loginWithRedirect()

  return props.auth.isAuthenticated ? (
    <Avatar square onClick={toggleMenu} />
  ) : (
    <Button onClick={logIn}>Sign In</Button>
  )
}

const Logo = styled.img`
  max-width: 100px;
`
