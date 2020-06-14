import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({onClick, text}:any) =>(
    <div>
        <input onChange={onClick} defaultValue={text}/>
    </div>
)

Button.propTypes = {
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

export default Button