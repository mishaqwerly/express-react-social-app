import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../components/Header'

export default function MainPage() {
  const [text, setText] = useState('Hello world')
  return (
    <div className="main-page">
      <Header/>
      {text}
    </div>
  )
}
