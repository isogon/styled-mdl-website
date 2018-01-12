import React from 'react'

import { Tooltip, Button, Icon } from 'styled-mdl'

const demo = () => (
  <Tooltip message="Follow" position="below">
    <Button icon>
      <Icon name="add" />
    </Button>
  </Tooltip>
)

const caption = 'Tooltip Below'
const code = `<Tooltip message="Follow" position="below">
  <Button icon><Icon name="add" /></Button>
</Tooltip>`

export default { demo, caption, code }
