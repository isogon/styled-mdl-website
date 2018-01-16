import React from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import styled from 'styled-components'

const CodeWrap = styled.div`
  min-width: 500px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  background: #f2f2f2;
  & .line-numbers {
    background: #fafafa;
    border-top: 1px solid #fafafa;
    border-bottom: 1px solid #fafafa;
  }
  pre[class*='language-'] {
    margin: 0 0 -1px 0;
    box-shadow: none;
    &:after,
    &:before {
      content: none;
    }
    > code {
      font-size: 14 px;
      line-height: 20px;
      box-shadow: none;
      border-left: none;
      overflow: visible;
      font-family: 'Ubuntu Mono', Consolas, Monaco, 'Andale Mono', monospace;
      &:first-child {
        margin-top: 15px;
      }
      &:last-child {
        margin-bottom: 15px;
      }
      background-color: #f2f2f2;
      padding: 0 20px;
    }
    &.line-numbers > code {
      background-color: #fafafa;
      background-size: 40px 40px;
      background-image: linear-gradient(
        transparent 50%,
        rgba(69, 142, 209, 0.06) 50%
      );
      padding: 0 55px;
    }
  }
  .line-numbers .line-numbers-rows {
    border-right-color: #dedede;
    padding-top: 15px;
    padding-bottom: 15px;
    top: -15px;
  }
`

export default class Code extends React.Component {
  componentDidMount() {
    Prism.highlightElement(this.code)
  }

  componentDidUpdate() {
    Prism.highlightElement(this.code)
  }

  render() {
    return (
      <CodeWrap className={this.props.className}>
        <pre>
          <code className={this.props.className} ref={(e) => (this.code = e)}>
            {this.props.children}
          </code>
        </pre>
      </CodeWrap>
    )
  }
}

Code.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

Code.defaultProps = {
  className: 'line-numbers language-jsx',
}
