import React from 'react'
import styled from 'styled-components'
import LayoutWithNav from '../components/LayoutWithNav'
import ComponentTitle from '../components/ComponentTitle'

const Spacer = styled.div`
  height: 2000px;
`

const Test = styled.div``

const pageLinks = [
  {
    id: 'test1',
    label: 'Test',
    content: (
      <div>
        <Test>Hello</Test>
        <Spacer />
      </div>
    ),
  },
  {
    id: 'test2',
    label: 'Test2',
    content: (
      <div>
        <Test>Hello2</Test>
        <Spacer />
      </div>
    ),
  },
]

const GettingStarted = () => (
  <LayoutWithNav links={pageLinks}>
    <ComponentTitle title="Getting Started" subtitle="TODO" />
  </LayoutWithNav>
)

export default GettingStarted
