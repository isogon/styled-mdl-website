import React from 'react'

import DemoPage from '../../components/DemoPage'

import lowerLeft from './demos/lowerLeft'
import lowerRight from './demos/lowerRight'
import upperLeft from './demos/upperLeft'
import upperRight from './demos/upperRight'

const title = 'Lists'
const subtitle = 'Customizable scrollable lists.'

const demos = [
  { title: 'Downward Opening Menus', demos: [lowerLeft, lowerRight] },
  { title: 'Upward Opening Menus', demos: [upperLeft, upperRight] },
]
const usage = {
  '<Menu>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/menu/Menu.js',
    props: [
      {
        name: 'control',
        type: 'node',
        default: 'undefined',
        description:
          'The element to render that will control the open/close state of the menu',
      },
      {
        name: 'bottomLeft',
        type: 'boolean',
        default: 'true',
        description:
          'Attaches the menu to the bottom left corner of the control',
      },
      {
        name: 'bottomRight',
        type: 'boolean',
        default: 'false',
        description:
          'Attaches the menu to the bottom right corner of the control',
      },
      {
        name: 'topLeft',
        type: 'boolean',
        default: 'false',
        description: 'Attaches the menu to the top left corner of the control',
      },
      {
        name: 'topRight',
        type: 'boolean',
        default: 'false',
        description: 'Attaches the menu to the top right corner of the control',
      },
    ],
  },
  '<MenuItem>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/menu/MenuItem.js',
    props: [],
  },
  '<MenuDevider>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/menu/MenuDivider.js',
    props: [],
  },
}

export default () => (
  <DemoPage
    title={title}
    subtitle={subtitle}
    demoGroups={demos}
    usage={usage}
  />
)
