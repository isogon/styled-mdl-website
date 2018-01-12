import React from 'react'

import { Tooltip, Button, Icon } from 'styled-mdl'

const demo = () => (
  <Tooltip message="Follow">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)

const caption = 'Tooltip Above'
const code = `<Tooltip message="Follow">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`

export default { demo, caption, code }
