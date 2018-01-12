import React, { Component } from 'react'

import DemoPage from '../../components/DemoPage'

import radioOn from './demos/radioOn'
import radioOff from './demos/radioOff'
import checkboxOn from './demos/checkboxOn'
import checkboxOff from './demos/checkboxOff'
import switchOn from './demos/switchOn'
import switchOff from './demos/switchOff'

const title = 'Toggles'
const subtitle = 'Choose between states.'
const demos = [
  { label: 'Checkbox', demos: [checkboxOff, checkboxOn] },
  { label: 'Radio Buttons', demos: [radioOn, radioOff] },
  { label: 'Switches', demos: [switchOn, switchOff] },
]

const description = 'TODO'
const usage = {
  '<Checkbox>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/checkbox/Checkbox.js',
    props: [],
  },
  '<Radio>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/radio/Radio.js',
    props: [],
  },
  '<Switch>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/switch/Switch.js',
    props: [],
  },
}

// eslint-disable-next-line react/prefer-stateless-function
export default () => (
  <DemoPage
    title={title}
    subtitle={subtitle}
    demoGroups={demos}
    usage={usage}
    description={description}
  />
)
