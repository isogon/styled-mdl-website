import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content from './Content'

const Wrap = styled.div`
  margin-bottom: 40px;
`

const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  color: rgba(0, 0, 0, 0.84);
  letter-spacing: 0.46px;
  line-height: 22px;
`

const Text = styled(Content)`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.54);
`

const ComponentTitle = ({ title, subtitle }) => (
  <Wrap>
    <Title>{title}</Title>
    {subtitle && <Text>{subtitle}</Text>}
  </Wrap>
)

ComponentTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ComponentTitle
