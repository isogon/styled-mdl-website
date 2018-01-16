import { compose, withStateHandlers, lifecycle } from 'recompose'
import { util, Ripple } from 'styled-mdl'
import Router, { withRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'

import logProps from '../utils/logProps'

const { getters: g } = util

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

const enhance = compose(
  withStateHandlers(
    { isActive: false },
    {
      handleHashChange: (state, props) => () => ({
        isActive: window.location.hash === props.href,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.handleHashChange()
      window.addEventListener('hashchange', this.props.handleHashChange)
    },
    componentWillUnmount() {
      window.removeEventListener('hashchange', this.props.handleHashChange)
    },
  }),
)

const PageLink = ({ children, href, isActive }) => (
  <LinkWrap isActive={isActive}>
    <a href={href}>
      {children}
      <Ripple accent />
    </a>
  </LinkWrap>
)

export default enhance(PageLink)
