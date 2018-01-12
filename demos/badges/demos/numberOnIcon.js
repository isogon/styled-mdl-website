import React from 'react'
import { Badge, Icon } from 'styled-mdl'

const demo = () => (
  <Badge overlap text="4">
    <Icon lg name="account_box" />
  </Badge>
)
const caption = 'Number over icon'
const code = `
  <Badge overlap text="4">
    <Icon lg name="account_box" />
  </Badge>
`

export default { demo, caption, code }
