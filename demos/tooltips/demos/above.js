import React from 'react'
import MdAdd from 'react-icons/lib/md/add'

import { Tooltip, Button } from 'styled-mdl'

const demo = () => (
  <Tooltip message="Follow">
    <Button icon>
      <MdAdd />
    </Button>
  </Tooltip>
)

const caption = 'Above'
const code = `<Tooltip message="Follow">
  <Button icon><MdAdd /></Button>
</Tooltip>`

export default { demo, caption, code }
