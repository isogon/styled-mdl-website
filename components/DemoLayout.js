import React from 'react'
import styled from 'styled-components'

import { sideNavLinks } from './_navigation'
import SideNav from './SideNav'
import Layout from './Layout'

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: 100%;
  margin-top: 74px;
  padding-left: 150px;
  @media (min-width: 1048px) {
    padding-left: 216px;
  }
`
const DemoLayout = (props) => (
  <Layout>
    <div>
      <SideNav links={sideNavLinks} />
      <Content>{props.children}</Content>
    </div>
  </Layout>
)

export default DemoLayout
