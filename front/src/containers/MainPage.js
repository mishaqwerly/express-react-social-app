import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../components/Header'

export default function MainPage() {
  const [text, setText] = useState('Hello word')
  return (
    <div className="main-page">
      <Header/>
      {text}
    </div>
  )
}
