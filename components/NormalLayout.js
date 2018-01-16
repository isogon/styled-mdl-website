import React from 'react'
import styled from 'styled-components'

import Layout from './Layout'

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 74px auto 60px;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 1032px) {
    padding-left: 90px;
    padding-right: 90px;
    max-width: 1260px;
  }
`
const NormalLayout = (props) => (
  <Layout>
    <Content>{props.children}</Content>
  </Layout>
)

export default NormalLayout
