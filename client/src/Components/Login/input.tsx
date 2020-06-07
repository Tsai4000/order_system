import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({id, text }:any) => (
    <div>
        <input value={text} onChange={id}/>
    </div>
)

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired
}

export default Input