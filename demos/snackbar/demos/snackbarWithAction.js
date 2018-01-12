import React, { Component } from 'react'
import { Toast, Snackbar, Button } from 'styled-mdl'

class Demo extends Component {
  state = {
    messages: [],
    showMessage: false,
    buttonColor: null,
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.messages[0] &&
      nextState.messages[0] !== this.state.messages[0]
    ) {
      this.setState({ showMessage: true })

      this.timeout = setTimeout(() => {
        this.setState({ showMessage: false })
        this.timeout = setTimeout(() => {
          this.setState({ messages: this.state.messages.slice(1) })
        }, 300)
      }, 2000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  changeButtonColor = () => {
    this.counter += 1
    this.setState({
      buttonColor: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
      messages: [
        ...this.state.messages,
        {
          message: 'Button color changed',
          actionText: 'Undo',
          actionHandler: () => this.setState({ buttonColor: null }),
        },
      ],
    })
  }

  render() {
    return (
      <div>
        <Button
          raised
          style={{ background: this.state.buttonColor }}
          onClick={this.changeButtonColor}
          text="Show"
        />
        <Toast isActive={this.state.showMessage}>
          <Snackbar {...this.state.messages[0]} />
        </Toast>
      </div>
    )
  }
}

const caption = 'Snacbkar With Action'
const code = `class Demo extends Component {
  state = {
    messages: [],
    showMessage: false,
    buttonColor: null,
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.messages[0] &&
      nextState.messages[0] !== this.state.messages[0]
    ) {
      this.setState({ showMessage: true })

      this.timeout = setTimeout(() => {
        this.setState({ showMessage: false })
        this.timeout = setTimeout(() => {
          this.setState({ messages: this.state.messages.slice(1) })
        }, 300)
      }, 2000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  changeButtonColor = () => {
    this.counter += 1
    this.setState({
      buttonColor: \`#\${Math.floor(Math.random() * 0xffffff).toString(16)}\`,
      messages: [
        ...this.state.messages,
        {
          message: 'Button color changed',
          actionText: 'Undo',
          actionHandler: () => this.setState({ buttonColor: null }),
        },
      ],
    })
  }

  render() {
    return (
      <div>
        <Button
          raised
          style={{ background: this.state.buttonColor }}
          onClick={this.changeButtonColor}
          text="Show"
        />
        <Toast isActive={this.state.showMessage}>
          <Snackbar {...this.state.messages[0]} />
        </Toast>
      </div>
    )
  }
}
`

export default { demo: Demo, caption, code }
