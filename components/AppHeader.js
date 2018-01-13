import React from 'react'
import styled from 'styled-components'
import { shadow4dp, util, Spacer } from 'styled-mdl'

import AppName from './AppName'
import GithubLink from './GithubLink'

const { getters: g } = util

const Header = styled.header`
  position: relative;
  height: 64px;
  background: ${g.textLinkColor};
  ${shadow4dp()};
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 1;
`

export default () => (
  <Header>
    <AppName />
    <Spacer />
    <GithubLink />
  </Header>
)
