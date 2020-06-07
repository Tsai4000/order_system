import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({onClick, text}:any) =>(
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

export default Button