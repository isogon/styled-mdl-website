import React from 'react'
import { Badge, Icon } from 'styled-mdl'

const demo = () => (
  <Badge overlap text={<Icon sm name="done" />}>
    <Icon lg name="account_box" />
  </Badge>
)

const caption = 'Icon'
const code = `<Badge overlap text={<Icon sm name="done" />}>
  <Icon lg name="account_box" />
</Badge>`

export default { demo, caption, code }
