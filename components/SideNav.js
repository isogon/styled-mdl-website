import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withRouter } from 'next/router'

import { shadow4dp, util } from 'styled-mdl'

const { getters: g } = util

const Nav = styled.aside`
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 32px 0;
  ${shadow4dp} overflow: auto;
`

const LinkBase = styled.a`
  display: block;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  color: ${g.fg};
  text-decoration: none;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${g.textLinkColor};
      font-weight: 600;
    `};
`

const NavLink = withRouter(({ children, router, href }) => {
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <LinkBase
      href={href}
      isActive={router.pathname === href}
      onClick={handleClick}
    >
      {children}
    </LinkBase>
  )
})

const SideNav = ({ links }) => (
  <Nav>
    {links.map((link, i) => (
      <NavLink key={i} href={link.to}>
        {link.label}
      </NavLink>
    ))}
  </Nav>
)

SideNav.propTypes = {
  links: PropTypes.array,
}

export default SideNav
