import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>

      {props.title}
    </div>
  )
}

Navbar.protoTypes={title:PropTypes.string.isRequired}
Navbar.defaultProps={title : "sanat"}


