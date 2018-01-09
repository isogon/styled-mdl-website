import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab mini>
    <Icon name="add" />
  </Button>
)
const caption = 'Mini Fab'
const code = `/*----- Mini fab button -----*/
<Button fab mini><Icon name="add" /></Button>`

export default { demo, caption, code }
