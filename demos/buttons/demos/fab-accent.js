import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab accent>
    <Icon name="add" />
  </Button>
)

const caption = 'Accent Colored Fab'
const code = `
  <Button fab accent>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
