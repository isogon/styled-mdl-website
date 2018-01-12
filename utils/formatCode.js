import { compose, takeWhile, prop, split, join, map } from 'lodash/fp'

const isWhitespace = (c) => /\s/.test(c) && c !== '\n'

const getLeadingTabCount = compose(prop('length'), takeWhile(isWhitespace))

const normalizeTabs = (code) => {
  const leadingTabCount = getLeadingTabCount(code)
  return compose(
    join('\n'),
    map((line) => line.substring(leadingTabCount)),
    split('\n')
  )(code)
}

const trimLeadingNewline = (c) => (c.startsWith('\n') ? c.substring(1) : c)
const trimTrailingNewline = (c) => (c.endsWith('\n') ? c.slice(0, -1) : c)

const formatCode = compose(
  normalizeTabs,
  trimLeadingNewline,
  trimTrailingNewline
)

export default formatCode
