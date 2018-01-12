import React from 'react'

import DemoPage from '../../components/DemoPage'

import above from './demos/above'
import below from './demos/below'
import left from './demos/left'
import right from './demos/right'
import multiLine from './demos/multiLine'
import large from './demos/large'

const title = 'Tooltips'
const subtitle = 'Useful information on hover.'

const demos = [
  { title: 'Basic Tooltips', demos: [above, below, left, right] },
  { title: 'Additional Tooltips', demos: [multiLine, large] },
]

const description = 'TODO'
const usage = {
  '<Tooltip>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tooltips/Tooltip.js',
    props: [],
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
