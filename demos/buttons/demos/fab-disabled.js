import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab disabled>
    <Icon name="add" />
  </Button>
)
const caption = 'Disabled Fab'
const code = `
  <Button fab disabled>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
