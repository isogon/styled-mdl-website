import styled from 'styled-components'
import { util } from 'styled-mdl'

const { getters: g } = util

export default styled.a.attrs({
  target: '_blank',
})`
  color: ${g.textLinkColor};
  text-decoration: none;
  &:visited {
    color: ${g.textLinkColor};
  }
`
