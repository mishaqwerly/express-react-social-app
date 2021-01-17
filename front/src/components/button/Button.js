import React from 'react'
import './Button.scss'

export default function Button({componentName,btnText, onHandleClick}) {
  function handleClick() {
    onHandleClick(componentName)
  }
  return (
    <div className="button" onClick={handleClick}>
      {btnText}
    </div>
  )
}
