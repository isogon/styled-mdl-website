import React from 'react'
import { Textfield } from 'styled-mdl'

const demo = () => (
  <Textfield
    label="Short Description"
    helperText="33/100"
    defaultValue="Useful information for your users"
  />
)
const caption = 'Helper text'
const code =
  '<Textfield label="Short Description" helperText="33/100" defaultValue="Useful information for your users" />'

export default { demo, caption, code }
