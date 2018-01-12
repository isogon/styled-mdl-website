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
      size="8"
    >
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the Material Design Lite dialog component. Please
        use responsibly.
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog}>Close</Button>
        <Button disabled>Disabled Action</Button>
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
      size="8"
    >
      <DialogTitle>MDL Dialog</DialogTitle>
      <DialogContent>
        This is an example of the Material Design Lite dialog component. Please
        use responsibly.
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog}>Close</Button>
        <Button disabled>Disabled Action</Button>
      </DialogActions>
    </Dialog>
  </div>
))`

export default { demo: Demo, caption, code }
