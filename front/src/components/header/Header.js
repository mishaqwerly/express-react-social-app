import React from 'react'
import './Header.scss'
import Button from '../button/Button'
import Logo from '../logo/Logo'

export default function Header({onHandleChange}) {

  function handleValueChange(value) {
    onHandleChange(value)
    //console.log(`new value -- ${value}`)
  }

  return (
    <div className="header">
      <Logo/>
      <div className="header__left">
        <Button text="Articles" onHandleClick={handleValueChange}/>
        <Button text="Add article" onHandleClick={handleValueChange}/>
        <Button text="Profile" onHandleClick={handleValueChange}/>
      </div>
    </div>
  )
}
