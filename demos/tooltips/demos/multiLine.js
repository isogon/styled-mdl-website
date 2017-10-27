import React from 'react'
import MdShare from 'react-icons/lib/md/share'

import { Tooltip, Button } from 'styled-mdl'

const demo = () => (
  <Tooltip
    message={
      <span>
        Share content on <br /> social media
      </span>
    }
  >
    <Button icon>
      <MdShare />
    </Button>
  </Tooltip>
)

const caption = 'Multiple lines'
const code = `<Tooltip message="Follow">
  <Button icon><MdAdd /></Button>
</Tooltip>`

export default { demo, caption, code }
