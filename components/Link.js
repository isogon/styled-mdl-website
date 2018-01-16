import React from 'react'
import styled from 'styled-components'
import InternalLink from 'next/link'
import { util, proxyStyledStatics } from 'styled-mdl'

const { getters: g } = util

const Anchor = styled.a`
  color: ${g.textLinkColor};
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: ${g.textLinkColor};
  }
`

export default proxyStyledStatics(Anchor, 'AnchorComponent')(({
  children,
  AnchorComponent,
  ...props
}) => props.external ? (
  <AnchorComponent {...props} target="_blank">
    {children}
  </AnchorComponent>
  ) : (
    <InternalLink {...props}>
      <AnchorComponent>{children}</AnchorComponent>
    </InternalLink>
  ))
