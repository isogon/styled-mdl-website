import React, { Component } from 'react'
import { without, concat } from 'lodash'
import { SnackbarContainer, Button } from 'styled-mdl'

function createAlert(message, onRequestDismiss) {
  const alert = { message, actionText: 'Dismiss', timeout: 0 }
  alert.actionHandler = () => onRequestDismiss(alert)
  return alert
}

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: [],
    }
  }

  alert = () => {
    const alert = createAlert('Example alert', this.clearAlert)
    this.addAlert(alert)
  }

  addAlert = (alert) => {
    this.setState({
      alerts: concat(this.state.alerts, alert),
    })
  }

  clearAlert = (alert) => {
    this.setState({
      alerts: without(this.state.alerts, alert),
    })
  }

  render() {
    return (
      <div>
        <Button raised onClick={this.alert} text="Show" />
        <SnackbarContainer
          messages={this.state.alerts}
          position="right"
          offsetY={0}
        />
      </div>
    )
  }
}

const caption = 'Alert'
const code = `function createAlert(message, onRequestDismiss) {
  const alert = { message, actionText: 'Dismiss', timeout: 0 };
  alert.actionHandler = () => onRequestDismiss(alert);
  return alert;
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: [],
    };
  }

  @autobind
  alert() {
    const alert = createAlert('Example alert', this.clearAlert);
    this.addAlert(alert);
  }

  @autobind
  addAlert(alert) {
    this.setState({
      alerts: concat(this.state.alerts, alert),
    });
  }

  @autobind
  clearAlert(alert) {
    this.setState({
      alerts: without(this.state.alerts, alert),
    });
  }

  render() {
    return (
      <div>
        <Button raised onClick={this.alert} text="Show" />
        <SnackbarContainer messages={this.state.alerts} />
      </div>
    );
  }
}`

export default { demo: Demo, caption, code }
