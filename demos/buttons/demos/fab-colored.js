import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab colored>
    <Icon name="add" />
  </Button>
)

const caption = 'Colored Fab'
const code = `/*----- Colored fab button -----*/
<Button fab colored><Icon name="add" /></Button>`

export default { demo, caption, code }
