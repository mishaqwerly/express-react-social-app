import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import Articles from '../../components/articles/Articles'
import AddArticles from '../../components/add-articles/AddArticles'
import Profile from '../../components/profile/Profile'

export default function MainPage() {
  const [componentName, setComponentName] = useState('Articles')

  const components = [
    {
      name: 'Articles'
    },
    {
      name: 'Add article'
    },
    {
      name: 'Profile'
    },
  ]
  
  function HandleChangeComponentName(name) {
    setComponentName(name)
  }

  let currentComponent;
  if (componentName === 'Articles') {
    currentComponent = <Articles/>
  } else if (componentName === 'Add article') {
    currentComponent = <AddArticles/>
  } else if (componentName === 'Profile') {
    currentComponent = <Profile/>
  }

  return (
    <div className="main-page">
      <Header onHandleChange={HandleChangeComponentName}/>
      {currentComponent}
    </div>
  )
}
