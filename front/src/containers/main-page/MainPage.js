import React, {useState} from 'react'
import './MainPage.scss'
import Header from '../../components/header/Header'
import Articles from '../../components/articles/Articles'
import AddArticles from '../../components/add-articles/AddArticles'
import Profile from '../../components/profile/Profile'
import {articlesComponentName, addArticlesComponentName, profileComponentName} from '../../shared/variables/componentsName'

export default function MainPage() {
  const [activeComponentName, setActiveComponentName] = useState('Articles')
  const [userInfo, setUserInfo] = useState('')

  const userData = {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 25,
    avatar: {
      fileId: 1,
      file: {
        id: 1,
        name: 'photo.jpg',
        path: '/upload/photo.jpg',
        size: 1234
      }
    },
    friends: [{}, {}, {}], //array of users
    articles: [{
      title: 'Article 1',
      text: 'Some text',
      images: [{}, {}, {}], // array of files
      createdAt: '2020-12-17 19:00:00',
      editedAt: '2020-12-17 20:00:00',
      likes: [
        {userId: 2, user: {id: 2}, date: '2020-12-17 21:00:00'},
        {userId: 3, user: {id: 3}, date: '2020-12-17 22:00:00'}
      ]
    }]
  };

  let currentComponent
 
  if (activeComponentName === articlesComponentName) {
    currentComponent = <Articles />
  } else if (activeComponentName === addArticlesComponentName) {
    currentComponent = <AddArticles/>
  } else if (activeComponentName === profileComponentName) {
    currentComponent = <Profile onHandleChangeUserInfo={(value) => setUserInfo(value)} userData={userData}/>
  }

  return (
    <div className="main-page">
      <Header onHandleChange={(value) => (setActiveComponentName(value))} userInfo={userInfo}/>
      {currentComponent}
    </div>
  )
}
