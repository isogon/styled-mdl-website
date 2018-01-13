import React from 'react'
import { Spinner } from 'styled-mdl'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding-bottom: 30vh;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export default class Loading extends React.Component {
  state = { active: false }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ active: true }), 250)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <Center><Spinner active={this.state.active} /></Center>
    )
  }
}
