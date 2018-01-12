import React from 'react'

import DemoPage from '../../components/DemoPage'

import text from './demos/text'
import error from './demos/error'
import multiLine from './demos/multiLine'
import helper from './demos/helper'
// import select from './demos/select';

const title = 'Text Fields'
const subtitle = 'Textual input components'
const demos = [
  { title: 'Basic Textfields', demos: [text, multiLine] },
  { title: 'Textfields with Errors and Helper Text', demos: [error, helper] },
]

const description = 'TODO'
const usage = {
  '<Textfield>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/textfield/Textfield.js',
    props: [],
  },
}

export default () => (
  <DemoPage
    title={title}
    subtitle={subtitle}
    demoGroups={demos}
    description={description}
    usage={usage}
  />
)
