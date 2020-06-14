import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({onClick, text, name}:any) =>(
    <div>
        <button className={name} onClick={onClick}>{text}</button>
    </div>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

export default Button;