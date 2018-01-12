import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button icon disabled>
    <Icon name="add" />
  </Button>
)
const caption = 'Disabled Icon Button'
const code = `
  <Button icon disabled>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
