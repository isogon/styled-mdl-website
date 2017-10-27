import React from 'react'
import { Button } from 'styled-mdl'
import { MdAdd } from 'react-icons/lib/md'

const demo = () => (
  <Button icon>
    <MdAdd />
  </Button>
)
const caption = 'Icon Button'
const code = `/*----- Icon button -----*/
<Button icon><MdAdd /></Button>`

export default { demo, caption, code }
