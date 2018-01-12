import React from 'react'
import { Badge, Icon } from 'styled-mdl'

const demo = () => <Badge text={<Icon sm name="done" />}>Walk the dog</Badge>

const caption = 'Icon over text'
const code = '<Badge text={<Icon sm name="done" />}>Walk the dog</Badge>'

export default { demo, caption, code }
