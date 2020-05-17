import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ onClick, id, text }:any) => (
    <div>
        <input value={text} onChange={id}/>
        <button onClick={onClick}>{text}</button>
    </div>
)

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired
}

export default Input