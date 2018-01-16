import React from 'react'
import styled from 'styled-components'
import DemoLayout from '../../components/DemoLayout'
import ComponentTitle from '../../components/ComponentTitle'
import Link from '../../components/Link'

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 30px;
`

const Intro = styled.p`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.46px;
`
const DemosIndex = () => (
  <DemoLayout>
    <Section>
      <ComponentTitle title="Components" />
      <Intro>
        Styled MDL is a React + Styled Components implementation of Google's{' '}
        <Link href="https://getmdl.io/">Material Design Lite</Link> (MDL). MDL
        is based on Google's Material Design Philosophy: "A visual language for
        our users that synthesizes the classic principles of good design with
        the innovation and possibility of technology and science." Understanding
        the goals and principles of Material Design is critical to the proper
        use of the Material Design Lite components. If you have not yet read the{' '}
        <Link href="https://material.io/guidelines/material-design/introduction.html">
          Material Design Introduction
        </Link>{' '}
        you should do so before attempting to use the components.
      </Intro>
    </Section>
  </DemoLayout>
)

export default DemosIndex
