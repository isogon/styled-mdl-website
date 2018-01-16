import { PropTypes } from 'prop-types'
import { initGlobals, createTheme, colors } from 'styled-mdl'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import AppHeader from './AppHeader'

const Main = styled.div`
  flex: 1;
  height: calc(100vh - 64px);
  overflow: auto;
  position: relative;
`

initGlobals({ fontObserver: 'Roboto' })

const theme = createTheme({
  colorPrimary: colors.indigo[500],
  colorPirmaryDark: colors.indigo[700],
  colorAccent: colors.pink[500],
})

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <AppHeader />
      <Main id="scrollarea">{props.children}</Main>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
