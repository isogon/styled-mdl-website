import React from 'react'
import { withStateHandlers } from 'recompose'
import isNode from 'is-node'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from 'styled-mdl'

const appElement = isNode ? undefined : document.getElementById('__next')

const mdSpecLink =
  'https://www.google.com/design/spec/components/dialogs.html#dialogs-specs'

const Demo = withStateHandlers(
  { isShowingDialog: false },
  {
    showDialog: () => () => ({ isShowingDialog: true }),
    hideDialog: () => () => ({ isShowingDialog: false }),
  }
)(({ showDialog, hideDialog, isShowingDialog }) => (
  <div>
    <Button raised onClick={showDialog} text="Show" />
    <Dialog
      isOpen={isShowingDialog}
      onRequestClose={hideDialog}
      contentLabel="My Dialog"
      appElement={appElement}
      size="5"
    >
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the MDL Dialog being used as a modal. It is using
        the full width action design intended for use with buttons that do not
        fit within the specified <a href={mdSpecLink}>length metrics</a>
        .
      </DialogContent>
      <DialogActions fullWidth>
        <Button onClick={hideDialog}>Agree</Button>
        <Button disabled>Inactive Action</Button>
      </DialogActions>
    </Dialog>
  </div>
))

const caption = 'Basic Dialog'
const code = `

// using recompose withStateHandlers
// https://github.com/acdlite/recompose/blob/master/docs/API.md#withstatehandlers

const Demo = withStateHandlers(
  { isShowingDialog: false },
  {
    showDialog: () => () => ({ isShowingDialog: true }),
    hideDialog: () => () => ({ isShowingDialog: false }),
  }
)(({ showDialog, hideDialog, isShowingDialog }) => (
  <div>
    <Button raised onClick={showDialog} text="Show" />
    <Dialog
      isOpen={isShowingDialog}
      onRequestClose={hideDialog}
      contentLabel="My Dialog"
      appElement={document.getElementById('__next')}
      size="5"
    >
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the MDL Dialog being used as a modal. It is using
        the full width action design intended for use with buttons that do not
        fit within the specified <a href={mdSpecLink}>length metrics</a>
        .
      </DialogContent>
      <DialogActions fullWidth>
        <Button onClick={this.hide}>Agree</Button>
        <Button disabled>Inactive Action</Button>
      </DialogActions>
    </Dialog>
  </div>
))`

export default { demo: Demo, caption, code }
