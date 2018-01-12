import React from 'react'

import DemoPage from '../../components/DemoPage'

import snackbarWithAction from './demos/snackbarWithAction'
import snackbar from './demos/snackbar'

const title = 'Snackbar'
const subtitle = 'Transient popup notifications.'
const demos = [
  { title: 'Snackbar', demos: [snackbar] },
  { title: 'Snackbar with action', demos: [snackbarWithAction] },
]

const description =
  'TODO: these components need some clarification and their demos are kinda bad'
const usage = {
  '<Snackbar>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/snackbar/Snackbar.js',
    props: [
      {
        name: 'message',
        type: 'string',
        default: 'undefined',
        description: 'The brief message to be displayed in the snacbkar',
      },
      {
        name: 'actionText',
        type: 'string',
        default: 'undefined',
        description: 'The text to show for the snackbar action',
      },
      {
        name: 'actionHandler',
        type: 'callback',
        default: 'undefined',
        description: 'This is called when the snackbar action is clicked',
      },
    ],
  },
  '<Toast>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/toast/Toast.js',
    props: [
      {
        name: 'isActive',
        type: 'boolean',
        default: 'false',
        description:
          'The toast will animate in when this becomes true, and animate out if it becomes false',
      },
      {
        name: 'position',
        type: 'enum left|right',
        default: 'left',
        description:
          'Determines wheter or not to display toast on bottom left or bottom right side of the screen.',
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
    description={description}
  />
)
