import React from 'react';
import PropTypes from 'prop-types';
import './order_list.css';
import './button.css'

export const Orderlist = ({onClick,text}:any) => (
    <div>
        <button  className="List" onClick={onClick}>{text}</button>
    </div>
)

Orderlist.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  export default Orderlist;