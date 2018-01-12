import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button icon primary>
    <Icon name="add" />
  </Button>
)
const caption = 'Primary Colored Icon Button'
const code = `
  <Button icon primary>
    <Icon name="add">
  </Button>
`

export default { demo, caption, code }
