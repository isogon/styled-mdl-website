import React from 'react'

import { Tooltip, Button, Icon } from 'styled-mdl'

const demo = () => (
  <Tooltip message="Follow" position="left">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)

const caption = 'Left Side tooltip'
const code = `<Tooltip message="Follow" position="left">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`

export default { demo, caption, code }
