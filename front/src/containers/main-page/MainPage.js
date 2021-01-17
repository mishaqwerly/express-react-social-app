import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import Articles from '../../components/articles/Articles'
import AddArticles from '../../components/add-articles/AddArticles'
import Profile from '../../components/profile/Profile'

export default function MainPage() {
  const [activeComponentName, setActiveComponentName] = useState('Articles')
  const [userInfo, setUserInfo] = useState('')

  function HandleChangeComponentName(name) {
    setActiveComponentName(name)
  }

  function HandleChangeUserInfo(data) {
    setUserInfo(data)
  }

  let currentComponent
 
  if (activeComponentName === 'Articles') {
    currentComponent = <Articles/>
  } else if (activeComponentName === 'Add articles') {
    currentComponent = <AddArticles/>
  } else if (activeComponentName === 'Profile') {
    currentComponent = <Profile onHandleChangeUserInfo={HandleChangeUserInfo}/>
  }

  return (
    <div className="main-page">
      <Header onHandleChange={HandleChangeComponentName} userInfo={userInfo}/>
      {currentComponent}
    </div>
  )
}
