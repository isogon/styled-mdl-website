import React from 'react'
import { initGlobals, createTheme, colors } from 'styled-mdl'
import styled, { ThemeProvider } from 'styled-components'
import { PropTypes } from 'prop-types'

import { sideNavLinks } from './_navigation'
import ContentWrapper from './ContentWrapper'
import SideNav from './SideNav'
import TopBar from './TopBar'

const Main = styled.div`
  flex: 1;
  height: 100vh;
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
      <Main>
        <SideNav links={sideNavLinks} />
        <ContentWrapper>
          <TopBar />
          {props.children}
        </ContentWrapper>
      </Main>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}
