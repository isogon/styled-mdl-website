import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableHeader,
  TableBody,
  Row,
  HeaderCell,
  Cell,
  util,
} from 'styled-mdl'

import InlineCode from './InlineCode'

const { getters: g } = util

const CustomTable = Table.extend`
  border: 0;
  white-space: normal;
  background: transparent;
  margin-bottom: 40px;
  width: 100%;
  margin: 0 -18px 40px -18px;
`

const Name = Cell.extend`
  color: ${({ theme }) => `rgb(${theme.colorPrimary})`};
  font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
  width: 128px;
`

const Type = Cell.extend`
  color: ${g.textLinkColor};
  font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
  width: 128px;
`

const Default = Cell.extend`
  color: #888;
  font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
  width: 128px;
`

const CustomBody = TableBody.extend`
  tr:hover {
    background: transparent;
  }
`

const NoProps = InlineCode.extend`
  display: inline-block;
  font-size: 16px;
  padding: 1px 6px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.06);
  margin-bottom: 25px;
`

const Usage = ({ usage }) =>
  usage.length ? (
    <CustomTable>
      <TableHeader>
        <Row>
          <HeaderCell nonNumeric>Prop</HeaderCell>
          <HeaderCell nonNumeric>Type</HeaderCell>
          <HeaderCell nonNumeric>Default</HeaderCell>
          <HeaderCell nonNumeric>Description</HeaderCell>
        </Row>
      </TableHeader>
      <CustomBody>
        {usage.map((prop) => (
          <Row key={prop.name}>
            <Name nonNumeric>{prop.name}</Name>
            <Type nonNumeric>{prop.type}</Type>
            <Default nonNumeric>{prop.default}</Default>
            <Cell nonNumeric>{prop.description}</Cell>
          </Row>
        ))}
      </CustomBody>
    </CustomTable>
  ) : (
    <NoProps>No Custom Props</NoProps>
  )

Usage.propTypes = {
  usage: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      default: PropTypes.string,
      description: PropTypes.node,
    })
  ),
}

export default Usage
