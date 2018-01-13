import { PropTypes } from 'prop-types'
import { initGlobals, createTheme, colors } from 'styled-mdl'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { sideNavLinks } from './_navigation'
import AppHeader from './AppHeader'
import ContentWrapper from './ContentWrapper'
import SideNav from './SideNav'

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
      <Main>
        <SideNav links={sideNavLinks} />
        <ContentWrapper>{props.children}</ContentWrapper>
      </Main>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
