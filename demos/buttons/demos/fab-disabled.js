import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button fab disabled>
    <Icon name="add" />
  </Button>
)
const caption = 'Disabled'
const code = `/*----- Disabled fab button -----*/
<Button fab disabled><Icon name="add" /></Button>`

export default { demo, caption, code }
