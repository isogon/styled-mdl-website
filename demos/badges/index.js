import React from 'react'

import DemoPage from '../../components/DemoPage'

import numberOnIcon from './demos/numberOnIcon'
import iconOnIcon from './demos/iconOnIcon'
import number from './demos/number'
import icon from './demos/icon'
import button from './demos/button'

const title = 'Badges'
const subtitle = 'Small status descriptors for UI elements.'
const demos = [
  { title: 'Badges with icons', demos: [numberOnIcon, iconOnIcon] },
  { title: 'Badges with text', demos: [number, icon] },
  { title: 'Badges with buttons', demos: [button] },
]
const usage = {
  '<Badge>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/badges/Badge.js',
    props: [
      {
        name: 'text',
        type: 'node',
        default: 'undefined',
        description:
          'This is what will render inside the badge, can be any valid react node, but it will look strange if this is more than a few characters or a single icon',
      },
      {
        name: 'forButton',
        type: 'boolean',
        default: 'false',
        description:
          'Set this to true if you are using the badge with a button',
      },
      {
        name: 'overlap',
        type: 'boolean',
        default: 'false',
        description:
          'Slighly offsets the badge to the right. Set this to true if you are using the badge on top of an icon',
      },
    ],
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
