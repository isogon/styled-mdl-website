import React, { Component } from 'react'

import DemoPage from '../../components/DemoPage'

import wideCard from './demos/wide-card'
import squareCard from './demos/square-card'
import imageCard from './demos/image-card'
import eventCard from './demos/event-card'

const title = 'Cards'
const subtitle = 'Self-contained pieces of paper with data.'
const demos = [
  { title: 'Wide Card', demos: [wideCard] },
  { title: 'Square Card', demos: [squareCard] },
  { title: 'Cards with Backgrounds', demos: [imageCard, eventCard] },
]

const description = `The Card component and its supporting child components only have a few
configurable props. Create custom cards by extending their styles
and composing the provided components in different ways.`

const usage = {
  '<Card>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/Card.style.js',
    props: [
      {
        name: 'expand',
        type: 'boolean',
        default: 'false',
        description: 'Causes the card to expand to fill its container',
      },
    ],
  },
  '<CardActions>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardActions.style.js',
    props: [
      {
        name: 'border',
        type: 'boolean',
        default: 'false',
        description: 'Adds a border above the card actions',
      },
    ],
  },
  '<CardMedia>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardMedia.style.js',
  },
  '<CardMenu>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardMenu.style.js',
  },
  '<CardSubtitleText>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardSubtitleText.style.js',
  },
  '<CardTitle>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardTitle.style.js',
    props: [
      {
        name: 'border',
        type: 'boolean',
        default: 'false',
        description: 'Adds a border below the card title',
      },
      {
        name: 'expand',
        type: 'boolean',
        default: 'false',
        description: 'Causes the title area to expand to fill the card',
      },
    ],
  },
  '<CardTitleText>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/cards/CardTitleText.style.js',
  },
}
// eslint-disable-next-line react/prefer-stateless-function
export default class Cards extends Component {
  render() {
    return (
      <DemoPage
        title={title}
        subtitle={subtitle}
        demoGroups={demos}
        usage={usage}
        description={description}
      />
    )
  }
}
