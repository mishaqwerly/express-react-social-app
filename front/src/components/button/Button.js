import React from 'react'
import PropTypes from 'prop-types';
import './Button.scss'

import {Link} from "react-router-dom";

function Button({link, btnText}) {  
  return (
    <Link to={link}>
      <div className="button">
        {btnText}
      </div>
    </Link>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Button;
