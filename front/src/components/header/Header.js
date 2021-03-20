import React from 'react'
import PropTypes from 'prop-types';
import './Header.scss'
import NavButton from '../header-button/HeaderButton'
import Logo from '../logo/Logo'
import Button from '@material-ui/core/Button';

function Header({handleOpenArticleModal, userInfo}) {
  return (
    <div className="header">
      <Logo/>
      <div className="header__left">
        <div>
          <NavButton link="/" btnText="Articles"/>
          </div>
        <div>
          <Button variant="contained" color="secondary" onClick={() => handleOpenArticleModal(true)}>Add articles</Button>
        </div>
        <div>
          <NavButton link="/profile" btnText={`Profile ${userInfo}`}/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  userInfo: PropTypes.string,
};

Header.defaultProps = {
  userInfo: null,
};

export default Header;
