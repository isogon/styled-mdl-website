import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withRouter } from 'next/router'
import Link from 'next/link'

import { util, Ripple } from 'styled-mdl'

const { getters: g } = util

const Nav = styled.aside`
  width: 150px;
  @media (min-width: 1032px) {
    width: 200px;
  }
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 64px 0 32px 0;
  overflow: auto;
`

const LinkWrap = styled.div`
  position: relative;
  @media (min-width: 1032px) {
    margin-left: 66px;
  }
  a {
    position: relative;
    z-index: 10;
    background: transparent;
    display: block;
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 0 24px 0 24px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    letter-spacing: 0.64px;
    text-decoration: none;
    cursor: pointer;
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${g.textLinkColor};
      `};
  }
`

const NavLink = withRouter(({ children, router, href, as }) => (
  <LinkWrap isActive={router.asPath === as}>
    <Link as={as} href={href} prefetch>
      <a>
        {children}
        <Ripple accent />
      </a>
    </Link>
  </LinkWrap>
))

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
