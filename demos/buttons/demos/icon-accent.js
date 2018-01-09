import React from 'react'
import { Button, Icon } from 'styled-mdl'

const demo = () => (
  <Button icon accent>
    <Icon name="add" />
  </Button>
)

const caption = 'Accent Colored Icon'
const code = `/*----- Accent colored icon button -----*/
  <Button icon accent>
    <Icon name="add" />
  </Button>`

export default { demo, caption, code }
