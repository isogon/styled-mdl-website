import React from 'react'
import { Slider } from 'styled-mdl'

const demo = () => <Slider min={0} max={100} defaultValue={60} disabled />

const caption = 'Disabled'
const code = '<Slider min={0} max={100} defaultValue={60} disabled />'

export default { demo, caption, code }
