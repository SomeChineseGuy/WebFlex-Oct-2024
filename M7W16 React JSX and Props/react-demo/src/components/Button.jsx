/* eslint-disable react/prop-types */
import './Button.css'

const Button = (props) => {
  return (
    <button className='btn'>{props.buttonValue}</button>
  )
}

export default Button;