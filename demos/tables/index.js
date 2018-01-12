import React from 'react'

import DemoPage from '../../components/DemoPage'
import Link from '../../components/Link'

import dataTable from './demos/dataTable'

const title = 'Tables'
const subtitle = 'Organize data.'

const demos = [{ title: 'Table with selectable rows', demos: [dataTable] }]
const usage = {
  '<Table>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L7-L14',
    props: [],
  },
  '<TableHeader>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L16-L19',
    props: [],
  },
  '<TableBody>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L21-L25',
    props: [],
  },
  '<Row>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L27-L35',
    props: [
      {
        name: 'isSelected',
        type: 'boolean',
        default: 'false',
        description: 'Displays the row as selected',
      },
    ],
  },
  '<Cell>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L54-L62',
    props: [
      {
        name: 'nonNumeric',
        type: 'boolean',
        default: 'false',
        description:
          'Use this for non-numeric values that should be left aligned',
      },
    ],
  },
  '<HeaderCell>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L64-74',
    props: [
      {
        name: 'nonNumeric',
        type: 'boolean',
        default: 'false',
        description:
          'Use this for non-numeric values that should be left aligned',
      },
    ],
  },
  '<TableIcon>': {
    sourceLink:
      'https://github.com/isogon/styled-mdl/blob/master/src/tables/Table.style.js#L76-L80',
    props: [
      {
        name: 'name',
        type: 'string',
        default: 'undefined',
        description: (
          <span>
            Controls the icon type. Reference the{' '}
            <Link href="https://material.io/icons/" target="_blank">
              Material Icons
            </Link>{' '}
            page for a full list of icons
          </span>
        ),
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
