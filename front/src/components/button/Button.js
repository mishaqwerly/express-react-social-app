import React from 'react'
import './Button.scss'

export default function Button({text, onHandleClick}) {
  function handleClick() {
    onHandleClick(text)
  }
  return (
    <div className="button" onClick={handleClick}>
      {text}
    </div>
  )
}
