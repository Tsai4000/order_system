import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({onClick, text}:any) =>(
    <div>
        <input onChange={onClick} placeholder={text} name="password"/>
    </div>
)

Input.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

export default Input