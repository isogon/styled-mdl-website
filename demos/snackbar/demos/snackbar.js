import React, { Component } from 'react'
import { without, concat } from 'lodash'
import { SnackbarContainer, Button } from 'styled-mdl'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonColor: null,
      messages: [],
    }
  }

  changeButtonColor = () => {
    const buttonColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
    this.setState({ buttonColor })
    this.addMessage({
      message: 'Button color changed',
      actionText: 'Undo',
      actionHandler: () => this.setState({ buttonColor: null }),
      timeout: 2000,
    })
  }

  addMessage = (message) => {
    this.setState({
      messages: concat(this.state.messages, message),
    })
  }

  clearMessage = (message) => {
    this.setState({
      messages: without(this.state.messages, message),
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
        <SnackbarContainer
          messages={this.state.messages}
          onRequestLeave={this.clearMessage}
        />
      </div>
    )
  }
}

const caption = 'Snacbkar'
const code = `class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: null,
      messages: [],
    };
  }

  @autobind
  changeButtonColor() {
    const buttonColor = \`#\${Math.floor(Math.random() * 0xFFFFFF).toString(16)}\`;
    this.setState({ buttonColor });
    this.addMessage({
      message: 'Button color changed',
      actionText: 'Undo',
      actionHandler: () => this.setState({ buttonColor: null }),
      timeout: 2000,
    });
  }

  @autobind
  addMessage(message) {
    this.setState({
      messages: concat(this.state.messages, message),
    });
  }

  @autobind
  clearMessage(message) {
    this.setState({
      messages: without(this.state.messages, message),
    });
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
        <SnackbarContainer
          messages={this.state.messages}
          onRequestLeave={this.clearMessage}
        />
      </div>
    );
  }
}`

export default { demo: Demo, caption, code }
