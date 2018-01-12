import styled from 'styled-components'
import { transparentize } from 'polished'
import { util } from 'styled-mdl'
import { compose } from 'lodash/fp'

const { getters: g, rgb } = util

export default styled.code`
  font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
  background: ${compose(transparentize(0.93), rgb, g.colorPrimary)};
  padding: 1px 3px;
  border-radius: 2px;
  color: ${compose(rgb, g.colorPrimary)};
`
