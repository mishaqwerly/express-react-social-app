import React from 'react'
import './Header.scss'
import Button from './Button'
import Logo from './Logo'

export default function Header() {
  return (
    <div className="header">
      <Logo/>
      <Button text="Add post"/>
    </div>
  )
}
