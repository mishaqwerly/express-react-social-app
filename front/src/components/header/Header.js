import React from 'react'
import './Header.scss'
import Button from '../button/Button'
import Logo from '../logo/Logo'

export default function Header({onHandleChange, userInfo}) {

  function handleChangeValue(value) {
    onHandleChange(value)
  }

  return (
    <div className="header">
      <Logo/>
      <div className="header__left">
        <Button componentName="Articles" btnText="Articles" onHandleClick={handleChangeValue}/>
        <Button componentName="Add articles" btnText="Add articles" onHandleClick={handleChangeValue}/>
        <Button componentName="Profile" btnText={`Profile ${userInfo}`} onHandleClick={handleChangeValue}/>
      </div>
    </div>
  )
}
