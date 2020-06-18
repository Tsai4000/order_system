import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({onClick, text}:any) =>(
    <div>
        <input onChange={onClick} placeholder={text}/>
    </div>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

export default Button