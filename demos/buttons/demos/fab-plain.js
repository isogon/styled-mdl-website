import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab>
    <Icon name="add" />
  </Button>
)
const caption = 'Fab'
const code = `/*----- Fab button -----*/
<Button fab><Icon name="add" /></Button>`

export default { demo, caption, code }
