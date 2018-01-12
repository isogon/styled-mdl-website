import styled from 'styled-components'
import { util } from 'styled-mdl'

const { getters: g } = util

export default styled.a`
  color: ${g.textLinkColor};
  text-decoration: none;
  &:visited {
    color: ${g.textLinkColor};
  }
`
