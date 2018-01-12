import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab primary>
    <Icon name="add" />
  </Button>
)

const caption = 'Primary Colored Fab'
const code = `
  <Button fab primary>
    <Icon name="add" />
  </Button>
`

export default { demo, caption, code }
