import React from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import styled from 'styled-components'

const CodeWrap = styled.div`
  min-width: 500px;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #fafafa;
  background: #fafafa;
  pre[class*="language-"] {
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
      font-family: "Ubuntu Mono", Consolas, Monaco, "Andale Mono", monospace;
      &:first-child {
        margin-top: 15px;
      }
      &:last-child {
        margin-bottom: 15px;
      }
      background-color: #fafafa;
      background-image: linear-gradient(
        transparent 50%,
        rgba(69, 142, 209, 0.06) 50%
      );
      background-size: 40px 40px;
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
      <CodeWrap>
        <pre>
          <code
            className="line-numbers language-jsx"
            ref={(e) => (this.code = e)}
          >
            {this.props.children}
          </code>
        </pre>
      </CodeWrap>
    )
  }
}

Code.propTypes = {
  children: PropTypes.string,
}
