import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { shadow4dp, util, Button, Icon } from 'styled-mdl'
import map from 'lodash/map'

import Wrap from './Wrap'
import Code from './Code'
import SectionHeader from './SectionHeader'
import ComponentTitle from './ComponentTitle'
import formatCode from '../utils/formatCode'
import Usage from './Usage'
import Link from './Link'

const { getters: g } = util

const Section = styled.div`
  padding: 0 30px;
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
`

const DemoContainer = styled.div`
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 40px;
  background: white;
  ${shadow4dp()};
`
const DemoWrap = styled.div`
  padding: 20px 10px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Demo = styled.div`
  margin: 0 10px;
`

const DemoTitle = SectionHeader.extend`
  font-weight: normal;
  border-bottom: 1px solid #dedede;
  padding: 20px 0;
  margin: 0 20px;
  font-size: 16px;
`

const UsageWrap = styled.div`
  background: white;
  margin: 60px -16px -16px -16px;
  padding: 40px 0 60px 0;
`

const ComponentName = styled.h4`
  font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
  color: ${g.textLinkColor};
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 0;
`

const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
`
const UsageTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const SourceLink = Link.extend`
  font-weight: 300;
`

const MutedButton = Button.extend`
  color: rgba(0,0,0,0.3);
  padding: 0 10px;
  height: 28px;
`

const DemoPage = ({
  demoGroups,
  title: pageTitle,
  subtitle,
  usage,
  description,
}) => (
  <Wrap>
    <Section>
      <ComponentTitle title={pageTitle} subtitle={subtitle} />
      {demoGroups.map(({ title, demos }) => (
        <DemoContainer key={title}>
          <DemoTitle>{title}</DemoTitle>
          <DemoWrap>
            {demos.map(({ demo: Component }) => (
              <Demo key={Component}>
                <Component />
              </Demo>
            ))}
          </DemoWrap>
          <Code>
            {demos
              .map(
                (demo) =>
                  `/*--- ${demo.caption} ---*/\n${formatCode(demo.code)}`
              )
              .join('\n\n')}
          </Code>
        </DemoContainer>
      ))}
    </Section>
    <UsageWrap>
      <Section>
        <SectionHeader>Usage</SectionHeader>
        {description && <Description>{description}</Description>}
        {usage &&
          (Array.isArray(usage) ? (
            <Usage usage={usage} />
          ) : (
            map(usage, (component, name) => (
              <div>
                <UsageTitle>
                  <ComponentName>{name}</ComponentName>
                  <SourceLink href={component.sourceLink} target="_blank">
                    <MutedButton><Icon name="code" size="20" /> &nbsp;&nbsp;SOURCE</MutedButton>
                  </SourceLink>
                </UsageTitle>
                <Usage usage={component.props || []} />
              </div>
            ))
          ))}
      </Section>
    </UsageWrap>
  </Wrap>
)

DemoPage.propTypes = {
  demoGroups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      demos: PropTypes.arrayOf(
        PropTypes.shape({
          demo: PropTypes.Component,
          source: PropTypes.string,
          caption: PropTypes.string,
        })
      ),
    })
  ),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  usage: Usage.propTypes.usage,
  description: PropTypes.node,
}

export default DemoPage
