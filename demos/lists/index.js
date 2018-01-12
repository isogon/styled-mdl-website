import React from 'react'

import DemoPage from '../../components/DemoPage'
import Link from '../../components/Link'
import InlineCode from '../../components/InlineCode'
import avatarsAndActions from './demos/avatarsAndActions'
import avatarsAndControls from './demos/avatarsAndControls'
import icons from './demos/icons'
import simple from './demos/simple'
import threeLine from './demos/threeLine'
import twoLine from './demos/twoLine'

const title = 'Lists'
const subtitle = 'Customizable scrollable lists.'
const demos = [
  { title: 'Simple List', demos: [simple] },
  { title: 'List with icons', demos: [icons] },
  { title: 'List with Avatars and Actions', demos: [avatarsAndActions] },
  { title: 'List with Avatars and Controls', demos: [avatarsAndControls] },
  { title: 'Two Line List', demos: [twoLine] },
  { title: 'Three Line List', demos: [threeLine] },
]

const description = `The List component and its supporting child components only have a few
configurable props. Create custom lists by extending their styles
and composing the provided components in different ways.`

const usage = {
  '<List>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L6-L12',
    props: [
      {
        name: 'width',
        type: 'string',
        default: 'undefined',
        description: (
          <span>
            Sets the width of the list as a css value (e.g.{' '}
            <InlineCode>300px</InlineCode>)
          </span>
        ),
      },
    ],
  },
  '<ListItem>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L81-L134',
    props: [
      {
        name: 'twoLine',
        type: 'boolean',
        default: 'false',
        description: (
          <span>
            Enable this for list items with 2 lines of content. See the{' '}
            <Link href="https://material.io/guidelines/components/lists.html#lists-specs">
              Material Design Link Spec
            </Link>{' '}
            for details
          </span>
        ),
      },
      {
        name: 'threeLine',
        type: 'boolean',
        default: 'false',
        description: (
          <span>
            Enable this for list items with 3 lines of content. See the{' '}
            <Link href="https://material.io/guidelines/components/lists.html#lists-specs">
              Material Design Link Spec
            </Link>{' '}
            for details
          </span>
        ),
      },
    ],
  },
  '<LiAction>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L30',
    props: [],
  },
  '<LiIcon>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L39-L46',
    props: [],
  },
  '<LiAvatar>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L48-L66',
    props: [
      {
        name: 'src',
        type: 'string',
        default: 'undefined',
        description:
          'Should be a url to an image. If set, it will fill the avatar with this image',
      },
    ],
  },
  '<LiInfo>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L31-L34',
    props: [],
  },
  '<LiPrimary>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L14-L21',
    props: [],
  },
  '<LiSecondary>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L23-L28',
    props: [],
  },
  '<LiSubTitle>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L35-L37',
    props: [],
  },
  '<LiTextBody>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L72-L79',
    props: [],
  },
  '<LiTitle>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/list/List.style.js#L68-L70',
    props: [],
  },
}

export default () => (
  <DemoPage
    usage={usage}
    title={title}
    subtitle={subtitle}
    description={description}
    demoGroups={demos}
  />
)
