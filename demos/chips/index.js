import React, { Component } from 'react'

import DemoPage from '../../components/DemoPage'

import basic from './demos/basic'
import deletable from './demos/deletable'
import button from './demos/button'
import contact from './demos/contact'
import deletableContact from './demos/deletableContact'
import InlineCode from '../../components/InlineCode'

const title = 'Chips'
const subtitle = 'Represents complex entities in small blocks.'
const demos = [
  { title: 'Basic Chips', demos: [basic, deletable, button] },
  { title: 'Contact Chips', demos: [contact, deletableContact] },
]
const usage = {
  '<Chip>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/chips/Chip.js',
    props: [
      {
        name: 'deletable',
        type: 'boolean',
        default: 'false',
        description: 'Adds a button to delete the chip',
      },
      {
        name: 'onClickDelete',
        type: 'callback',
        default: 'undefined',
        description:
          'Called with the click event when a user clicks the delete button',
      },
      {
        name: 'contact',
        type: 'object',
        default: 'undefined',
        description: (
          <span>
            Provide an object with a <InlineCode>src</InlineCode> key to use an
            image or svg, otherwise set the <InlineCode>color</InlineCode>,{' '}
            <InlineCode>textColor</InlineCode> and <InlineCode>text</InlineCode>{' '}
            keys.{' '}
          </span>
        ),
      },
    ],
  },
  '<ButtonChip>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/chips/ButtonChip.js',
    props: [
      {
        name: 'contact',
        type: 'object',
        default: 'undefined',
        description: (
          <span>
            Provide an object with a <InlineCode>src</InlineCode> key to use an
            image or svg, otherwise set the <InlineCode>color</InlineCode>,{' '}
            <InlineCode>textColor</InlineCode> and <InlineCode>text</InlineCode>{' '}
            keys.{' '}
          </span>
        ),
      },
    ],
  },
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Chips extends Component {
  render() {
    return (
      <DemoPage
        title={title}
        subtitle={subtitle}
        demoGroups={demos}
        usage={usage}
      />
    )
  }
}
