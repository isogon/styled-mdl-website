import React from 'react'

import DemoPage from '../../components/DemoPage'
import InlineCode from '../../components/InlineCode'

import spinner from './demos/spinner'
import singleColorSpinner from './demos/singleColorSpinner'
import progress from './demos/progress'
import indeterminate from './demos/indeterminate'

const title = 'Loading'
const subtitle = 'Indicate loading and progress states.'
const demos = [
  { title: 'Progress Bar', demos: [progress] },
  { title: 'Indeterminate Progress Bar', demos: [indeterminate] },
  { title: 'Spinners', demos: [spinner, singleColorSpinner] },
]

const usage = {
  '<Progress>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/progress/Progress.js',
    props: [
      {
        name: 'indeterminate',
        type: 'boolean',
        default: 'false',
        description:
          'If set to true, it will display an indeterminate progress bar',
      },
      {
        name: 'precent',
        type: 'string',
        default: 'undefined',
        description:
          'Sets the percent complete, currently this must be a properly formatted string',
      },
      {
        name: 'width',
        type: 'string',
        default: '500px',
        description: (
          <span>
            Sets the width of the bar as a css value (e.g.{' '}
            <InlineCode>300px</InlineCode>)
          </span>
        ),
      },
    ],
  },
  '<Spinner>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/spinner/Spinner.js',
    props: [
      {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description:
          'Controls whether or not the spinner is active and visible',
      },
      {
        name: 'singleColor',
        type: 'boolean',
        default: 'false',
        description: 'Displays the spinner in a single color',
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
