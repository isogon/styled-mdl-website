import React from 'react'

import DemoPage from '../../components/DemoPage'
import InlineCode from '../../components/InlineCode'

import defaultSlider from './demos/default'
import startingValue from './demos/startingValue'
import disabled from './demos/disabled'

const title = 'Sliders'
const subtitle = 'Selecting a value out of a range.'

const demos = [
  { title: 'Sliders', demos: [defaultSlider, startingValue] },
  { title: 'Disabled slider', demos: [disabled] },
]

const description = (
  <span>
    The Slider component is just a style wrapper around the DOM element{' '}
    <InlineCode>&lt;input type="range" /&gt;</InlineCode>. It should have all
    the same props and behaviors.
  </span>
)
const usage = {
  '<Slider>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/slider/Slider.js',
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
