import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import Articles from '../../components/articles/Articles'
import AddArticles from '../../components/add-articles/AddArticles'
import Profile from '../../components/profile/Profile'
import {articlesComponentName, addArticlesComponentName, profileComponentName} from '../../shared/componentsName'

export default function MainPage() {
  const [activeComponentName, setActiveComponentName] = useState('Articles')
  const [userInfo, setUserInfo] = useState('')

  let currentComponent
 
  if (activeComponentName === articlesComponentName) {
    currentComponent = <Articles/>
  } else if (activeComponentName === addArticlesComponentName) {
    currentComponent = <AddArticles/>
  } else if (activeComponentName === profileComponentName) {
    currentComponent = <Profile onHandleChangeUserInfo={(value) => setUserInfo(value)}/>
  }

  return (
    <div className="main-page">
      <Header onHandleChange={(value) => (setActiveComponentName(value))} userInfo={userInfo}/>
      {currentComponent}
    </div>
  )
}
