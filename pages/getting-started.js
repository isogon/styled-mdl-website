import React from 'react'
import styled from 'styled-components'
import NormalLayout from '../components/NormalLayout'
import Link from '../components/Link'
import formatCode from '../utils/formatCode'
import Code from '../components/Code'

const Wrap = styled.div`
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
`

const PageTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  color: rgba(0, 0, 0, 0.84);
  letter-spacing: 0.46px;
  line-height: 22px;
`

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.75rem;
  margin-top: 64px;
`
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.75rem;
  color: rgba(0, 0, 0, 0.64);
`

const GettingStarted = () => (
  <NormalLayout>
    <Wrap>
      <PageTitle>Getting Started</PageTitle>
      <SectionTitle>Installation & Setup</SectionTitle>
      <Text>
        Styled MDL is designed to work with{' '}
        <Link href="https://reactjs.org/" external>
          React
        </Link>{' '}
        and{' '}
        <Link href="https://www.styled-components.com/" external>
          Styled Components
        </Link>. We will assume you have already setup a project and have a
        working knowledge of how to use with both React and Styled Components.
      </Text>
      <br />
      <Text>First install styled-mdl with npm or yarn</Text>
      <Code className="language-markup">yarn install styled-mdl</Code>
      <br />
      <Text>Then wherever you bootstrap your app</Text>
      <Code className="language-jsx">
        {formatCode(`
        import React from 'react'
        import ReactDOM from 'react-dom'
        import { ThemeProvider } from 'styled-components'
        import { initGlobals, createTheme, colors } from 'styled-mdl'

        // inject global styles
        initGlobals()

        // create a theme with whatever overrides you want, feel free to add
        // your own custom theme options as well, just be careful of naming
        // colisions, see theming section for details
        const theme = createTheme({
          colorPrimary: colors.indigo[500],
          colorPirmaryDark: colors.indigo[700],
          colorAccent: colors.pink[500],
          myCustomThemeColor: '#f5f5f5',
        })

        // use generated theme with <ThemeProvider> from styled-components
        ReactDom.render((
          <ThemeProvider theme={theme}>
            <AppComponent />
          </ThemeProvider>
        ), node)
      `)}
      </Code>
      <br />
      <Text>Now you are ready to start using Styled MDL components</Text>
      <SectionTitle>Using the Components</SectionTitle>
      <Text>
        All Styled MDL components can be imported into your code from the main
        package
      </Text>
      <Code className="language-jsx">
        {formatCode(`
        import { Button } from 'styled-mdl'

        <Button type="submit">Submit</Button>
      `)}
      </Code>
      <br />
      <Text>
        Use a components props to control its look and feel. Check out the{' '}
        <Link href="/components">components</Link> section for details on what
        props are available on each component
      </Text>
      <Code className="language-jsx">
        {'<Button type="submit" raised>Submit</Button>'}
      </Code>
      <br />
      <Text>Or simply extend the components styles for more control</Text>
      <Code className="language-jsx">
        {formatCode(`
        const BigRedButton = Button.extend\`
          background-color: red;
          color: white;
          height: 50px;
          font-size: 18px;
          &:hover {
            background-color: darkred;
          }
        \`

        <BigRedButton>PUSH ME</BigRedButton>
      `)}
      </Code>
    </Wrap>
  </NormalLayout>
)

export default GettingStarted
