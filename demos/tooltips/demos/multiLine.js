import React from 'react'

import { Tooltip, Button, Icon } from 'styled-mdl'

const demo = () => (
  <Tooltip
    message={
      <span>
        Share content on <br /> social media
      </span>
    }
  >
    <Button icon>
      <Icon name="share" />
    </Button>
  </Tooltip>
)

const caption = 'Multiple Line Tooltip'
const code = `<Tooltip message="Follow">
  <Button icon><Icon name="share" /></Button>
</Tooltip>`

export default { demo, caption, code }
