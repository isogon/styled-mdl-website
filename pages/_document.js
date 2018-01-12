import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MaterialIcons, Roboto } from 'styled-mdl'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Styled MDL</title>
          <MaterialIcons />
          <Roboto />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-coy.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/plugins/line-numbers/prism-line-numbers.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
