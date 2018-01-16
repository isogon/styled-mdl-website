import React from 'react'

const logProps = (Component) => (props) => {
  console.dir(props)
  return <Component {...props} />
}

export default logProps
