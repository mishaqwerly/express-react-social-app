import React from 'react'
import PropTypes from 'prop-types';
import './Header.scss'
import Button from '../button/Button'
import Logo from '../logo/Logo'

function Header({userInfo}) {
  return (
    <div className="header">
      <Logo/>
      <div className="header__left">
        <Button link="/" btnText="Articles"/>
        <Button link="/add-articles" btnText="Add articles"/>
        <Button link="/profile" btnText={`Profile ${userInfo}`}/>
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
