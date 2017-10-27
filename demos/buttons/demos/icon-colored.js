import React from 'react'
import { Button } from 'styled-mdl'
import { MdAdd } from 'react-icons/lib/md'

const demo = () => (
  <Button icon primary>
    <MdAdd />
  </Button>
)
const caption = 'Colored Icon'
const code = `/*----- Primary colored icon button -----*/
<Button icon primary><MdAdd /></Button>`

export default { demo, caption, code }
