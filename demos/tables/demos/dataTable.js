import React from 'react'
import { css } from 'styled-components'

import {
  Table,
  TableHeader,
  TableBody,
  Row,
  HeaderCell,
  TableIcon,
  Cell,
  shadow2dp,
  Checkbox,
  theme,
} from 'styled-mdl'

const DemoTable = Table.extend`
  ${shadow2dp()};
`

const DemoTh = HeaderCell.extend`
  ${({ sorted }) =>
    sorted &&
    css`
      color: ${theme.textColorPrimary};
    `};
`

const demo = () => (
  <DemoTable>
    <TableHeader>
      <Row>
        <DemoTh>
          <Checkbox />
        </DemoTh>
        <DemoTh nonNumeric sorted>
          <TableIcon name="arrow_downward" />
          Material
        </DemoTh>
        <DemoTh>Quantity</DemoTh>
        <DemoTh>Unit price</DemoTh>
      </Row>
    </TableHeader>
    <TableBody>
      <Row isSelected>
        <Cell>
          <Checkbox defaultChecked />
        </Cell>
        <Cell nonNumeric>Acrylic (Transparent)</Cell>
        <Cell>25</Cell>
        <Cell>$2.90</Cell>
      </Row>
      <Row>
        <Cell>
          <Checkbox />
        </Cell>
        <Cell nonNumeric>Laminate (Gold on Blue)</Cell>
        <Cell>10</Cell>
        <Cell>$2.35</Cell>
      </Row>
      <Row>
        <Cell>
          <Checkbox />
        </Cell>
        <Cell nonNumeric>Plywood (Birch)</Cell>
        <Cell>50</Cell>
        <Cell>$1.25</Cell>
      </Row>
    </TableBody>
  </DemoTable>
)

const caption = 'Data table'

const code = `
const DemoTable = Table.extend\`
  \${shadow2dp()}
\`

const DemoTh = HeaderCell.extend\`
  \${({ sorted }) => sorted && css\`
    color: \${theme.textColorPrimary}
  \`}
\`

// somewhere in a render
<DemoTable>
  <TableHeader>
    <Row>
      <DemoTh><Checkbox /></DemoTh>
      <DemoTh nonNumeric sorted>
        <TableIcon name="arrow_downward" />
        Material
      </DemoTh>
      <DemoTh>Quantity</DemoTh>
      <DemoTh>Unit price</DemoTh>
    </Row>
  </TableHeader>
  <TableBody>
    <Row isSelected>
      <Cell><Checkbox defaultChecked /></Cell>
      <Cell nonNumeric>Acrylic (Transparent)</Cell>
      <Cell>25</Cell>
      <Cell>$2.90</Cell>
    </Row>
    <Row>
      <Cell><Checkbox /></Cell>
      <Cell nonNumeric>Laminate (Gold on Blue)</Cell>
      <Cell>10</Cell>
      <Cell>$2.35</Cell>
    </Row>
    <Row>
      <Cell><Checkbox /></Cell>
      <Cell nonNumeric>Plywood (Birch)</Cell>
      <Cell>50</Cell>
      <Cell>$1.25</Cell>
    </Row>
  </TableBody>
</DemoTable>`

export default { demo, caption, code }
