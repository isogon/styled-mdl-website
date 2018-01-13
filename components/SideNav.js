import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withRouter } from 'next/router'
import Link from 'next/link'

import { shadow4dp, util, Icon } from 'styled-mdl'

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

const LinkWrap = styled.div`
  a {
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
  }
`

const NavLink = withRouter(({ children, router, href, as }) => (
  <LinkWrap isActive={router.asPath === as}>
    <Link as={as} href={href} prefetch><a>{children}</a></Link>
  </LinkWrap>
))

const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 14px;
  position: relative;
  margin: 0px 0 5px 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${g.textLinkColor};
`

const GithubLink = styled.a`
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  color: #888;
  opacity: 0.65;
  display: inline-flex;
  align-items: center;
  margin-left: 23px;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
  }
`

const LinkIcon = Icon.extend`
  font-size: 24px;
  margin-right: 5px;
`

const SideNav = ({ links }) => (
  <Nav>
    <Title>STYLED MDL</Title>
    <GithubLink href="https://github.com/isogon/styled-mdl">
      <LinkIcon name="link" /> Github
    </GithubLink>
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
