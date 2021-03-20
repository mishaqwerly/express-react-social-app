import React from 'react'
import PropTypes from 'prop-types';
import './HeaderButton.scss'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

function HeaderButton({link, btnText}) {  
  return (
    <Link to={link}>
      <Button variant="contained" color="secondary" >
        Add articles
      </Button>
    </Link>
  )
}

HeaderButton.propTypes = {
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default HeaderButton;
