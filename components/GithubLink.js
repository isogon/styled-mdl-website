import React from 'react'
import styled from 'styled-components'
import { Icon, Button } from 'styled-mdl'

const CustomLink = Button.extend`
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const LinkWrap = styled.a`
  text-decoration: none;
`

const LinkIcon = Icon.extend`
  font-size: 24px;
  margin-right: 5px;
`

const GithubLink = () => (
  <LinkWrap href="https://github.com/isogon/styled-mdl" target="_blank">
    <CustomLink>
      <LinkIcon name="link" /> Github
    </CustomLink>
  </LinkWrap>
)

export default GithubLink
