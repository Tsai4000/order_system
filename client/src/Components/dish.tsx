import React from 'react'
import PropTypes from 'prop-types'

export const Dish = ({dish_name, onClick, number}:any) => (
    <div>
        <img>src={require('./img/background.jpg')} alt="Background"</img>
        <button onClick={onClick}>{dish_name}數量 {number}</button>
        <button onClick={onClick}>取消 {number}</button>
    </div>
)

Dish.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  dish_name: PropTypes.string.isRequired
}

export default Dish