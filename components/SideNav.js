import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavLink from './NavLink'

const Nav = styled.aside`
  width: 150px;
  @media (min-width: 1048px) {
    width: 216px;
  }
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 64px 0 32px 0;
  overflow: auto;
`

const SideNav = ({ links }) => (
  <Nav>
    {links.map((link, i) => (
      <NavLink key={i} href={link.to} as={link.as}>
        {link.label}
      </NavLink>
    ))}
  </Nav>
)

SideNav.propTypes = {
  links: PropTypes.array,
}

export default SideNav
