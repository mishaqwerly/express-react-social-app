import React from 'react'
import PropTypes from 'prop-types';
import './Button.scss'

function Button({componentName, btnText, onHandleClick}) {  
  return (
    <div className="button" onClick={() => onHandleClick(componentName)}>
      {btnText}
    </div>
  )
}

Button.propTypes = {
  componentName: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default Button;
