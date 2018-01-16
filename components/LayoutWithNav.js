import React from 'react'
import styled from 'styled-components'

import PageNav from './PageNav'
import Layout from './Layout'

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: 100%;
  padding-left: 150px;
  @media (min-width: 1032px) {
    padding-left: 200px;
  }
`

const Section = styled.div`
  padding-top: 74px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`

const LayoutWithNav = (props) => (
  <Layout>
    <PageNav links={props.links} />
    <Content>
      <Section>{props.children}</Section>
      {props.links.map(({ content, id }) => (
        <Section key={id} id={id}>
          {content}
        </Section>
      ))}
    </Content>
  </Layout>
)

export default LayoutWithNav
