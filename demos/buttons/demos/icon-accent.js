import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button icon accent>
    <Icon name="add" />
  </Button>
)

const caption = 'Accent colored icon button'
const code = `
  <Button icon accent>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
