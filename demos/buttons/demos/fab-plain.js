import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab>
    <Icon name="add" />
  </Button>
)
const caption = 'Default Fab'
const code = `
  <Button fab>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
