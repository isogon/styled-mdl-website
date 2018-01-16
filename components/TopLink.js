import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css, keyframes } from 'styled-components'
import { Ripple } from 'styled-mdl'

const grow = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0, 1, 1);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`
const fade = keyframes`
  from {
    color: rgba(255, 255, 255, 0.85);
  }
  to {
    color: white;
  }
`
const LinkWrap = styled.div`
  position: relative;
  a {
    position: relative;
    z-index: 10;
    display: block;
    height: 64px;
    font-size: 13px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: rgba(255, 255, 255, 0.65);
    font-weight: 600;
    letter-spacing: 0.64px;
    text-decoration: none;
    cursor: pointer;
    &:after {
      content: '';
      height: 2px;
      width: 100%;
      transform: scale3d(0, 1, 1);
      opacity: 0;
      display: block;
      bottom: 0px;
      left: 0px;
      position: absolute;
      background: yellow;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.4, 1);
    }
    &:hover {
      color: rgba(255, 255, 255, 0.85);
    }
    ${({ isActive }) =>
      isActive &&
      css`
        animation-duration: 0.3s;
        animation-name: ${fade};
        animation-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
        animation-fill-mode: forwards;
        &:after {
          animation-duration: 0.3s;
          animation-name: ${grow};
          animation-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
          animation-fill-mode: forwards;
        }
        &:hover {
          color: white;
        }
      `};
  }
`

const TopLink = withRouter(({ children, router, href, as }) => (
  <LinkWrap
    isActive={router.asPath.startsWith(as) || router.pathname.startsWith(href)}
  >
    <Link as={as} href={href} prefetch>
      <a>
        {children}
        <Ripple />
      </a>
    </Link>
  </LinkWrap>
))

export default TopLink
