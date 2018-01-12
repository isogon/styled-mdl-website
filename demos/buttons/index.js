import React from 'react'

import DemoPage from '../../components/DemoPage'

import fabPlain from './demos/fab-plain'
import fabColored from './demos/fab-colored'
import fabAccent from './demos/fab-accent'
import fabDisabled from './demos/fab-disabled'
import fabMini from './demos/fab-mini'

import raisedDefault from './demos/raised-default'
import raisedColored from './demos/raised-colored'
import raisedAccent from './demos/raised-accent'
import raisedDisabled from './demos/raised-disabled'

import flatDefault from './demos/flat-default'
import flatColored from './demos/flat-colored'
import flatAccent from './demos/flat-accent'
import flatDisabled from './demos/flat-disabled'

import iconDefault from './demos/icon-default'
import iconColored from './demos/icon-colored'
import iconAccent from './demos/icon-accent'
import iconDisabled from './demos/icon-disabled'

const title = 'Buttons'
const subtitle = 'Variations on Material Design buttons.'
const demos = [
  {
    title: 'Default Buttons',
    demos: [flatDefault, flatColored, flatAccent, flatDisabled],
  },
  {
    title: 'Raised Buttons',
    demos: [raisedDefault, raisedColored, raisedAccent, raisedDisabled],
  },
  {
    title: 'Floating Action Buttons',
    demos: [fabPlain, fabColored, fabAccent, fabDisabled, fabMini],
  },
  {
    title: 'Icon Buttons',
    demos: [iconDefault, iconColored, iconAccent, iconDisabled],
  },
]
const usage = {
  '<Button>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/buttons/Button.js',
    props: [
      {
        name: 'raised',
        type: 'boolean',
        default: 'false',
        description: 'Renders the button as a raised button',
      },
      {
        name: 'fab',
        type: 'boolean',
        default: 'false',
        description: `Renders the button as a Floating Action Button.
            If the button is a FAB, it should contain an icon as its only child`,
      },
      {
        name: 'icon',
        type: 'boolean',
        default: 'false',
        description: `Renders the button as an icon button.
            If the button is a FAB, it should contain an icon as its only child`,
      },
      {
        name: 'primary',
        type: 'boolean',
        default: 'false',
        description: 'Renders the button in the primary color',
      },
      {
        name: 'accent',
        type: 'boolean',
        default: 'false',
        description: 'Renders the button in the accent color',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the button',
      },
      {
        name: 'ripple',
        type: 'boolean',
        default: 'true',
        description: 'Controls whether or not to display the ripple effect',
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
