import React from 'react'
import styled from 'styled-components'

import TopLink from './TopLink'
import { topNavLinks } from './_navigation'

const Nav = styled.nav`
  height: 100%;
  margin-left: 60px;
  display: inline-flex;
  align-items: flex-end;
`

const TopNav = () => (
  <Nav>
    {topNavLinks.map((link, i) => (
      <TopLink key={i} href={link.to} as={link.as}>
        {link.label}
      </TopLink>
    ))}
  </Nav>
)

export default TopNav
