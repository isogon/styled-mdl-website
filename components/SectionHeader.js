import styled from 'styled-components'
import { util } from 'styled-mdl'

const { getters: g } = util

const SectionHeader = styled.h4`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 10px;
  color: ${g.textColorPrimary};
`

export default SectionHeader
