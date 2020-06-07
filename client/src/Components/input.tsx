import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({id, text, name}:any) => (
    <div>
        <input className={name} value={text} onChange={id}/>
    </div>
)

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Input