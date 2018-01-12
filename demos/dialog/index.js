import React from 'react'

import DemoPage from '../../components/DemoPage'

import basic from './demos/basic'
import fullWidth from './demos/fullWidthActions'
import InlineCode from '../../components/InlineCode'
import Link from '../../components/Link'

const title = 'Dialog'
const subtitle = 'Modal windows for dedicated user input.'
const demos = [
  { title: 'Basic Dialog', demos: [basic] },
  { title: 'Dialog with full-width buttons', demos: [fullWidth] },
]

const description = (
  <span>
    The Dialog component is a styled wrapper around{' '}
    <Link href="https://github.com/reactjs/react-modal" target="_blank">
      React Modal
    </Link>. It supports the entire React Modal API + adds a new{' '}
    <InlineCode>size</InlineCode> prop to easily control sizing. We also provide{' '}
    <InlineCode>DialogTitle</InlineCode>, <InlineCode>DialogContent</InlineCode>{' '}
    and <InlineCode>DialogActions</InlineCode> components to support the{' '}
    <Link
      target="_blank"
      href="https://material.io/guidelines/components/dialogs.html"
    >
      Material Design dialog spec
    </Link>.
  </span>
)

const usage = {
  '<Dialog>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/dialog/Dialog.js',
    props: [
      {
        name: 'size',
        type: 'number|string',
        default: '5',
        description: (
          <span>
            Scales the dialog by factors of 56px, so{' '}
            <InlineCode>size="5"</InlineCode> will render a dialog that is 280px
            wide
          </span>
        ),
      },
    ],
  },
  '<DialogTitle>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/dialog/Dialog.style.js#L39-L45',
  },
  '<DialogContent>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/dialog/Dialog.style.js#L47-L52',
  },
  '<DialogActions>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/dialog/Dialog.style.js#L54-L78',
    props: [
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Display action buttons as full width instead of inline',
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
