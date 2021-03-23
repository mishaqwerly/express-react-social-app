import React, {useState} from 'react'
import './MainLayout.scss'
import Header from '../../components/header/Header'
import Articles from '../articles/Articles'
import Modal from '../../components/modal/Modal'
import ArticleForm from '../article-form/ArticleForm'
import Profile from '../../components/profile/Profile'
import NotFound from '../../components/not-found-page/NotFound'
import {Route, Switch} from "react-router-dom";

export default function MainLayout() {
  const [userInfo, setUserInfo] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [editPostId, setEditPostId] = useState(null)

  function editPostEvent(id) {
    setEditPostId(id)
    setIsOpenModal(true)
  }

  function closeArticleModal() {
    setEditPostId(null)
    setIsOpenModal(false)
  }

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

  return (
    <div className="main-page">
      <Header userInfo={userInfo} handleOpenArticleModal={(value) => setIsOpenModal(value)}/>
      <Modal isOpen={isOpenModal} onClose={closeArticleModal}>
        <ArticleForm isEdit={editPostId || false}/>
      </Modal>
      <Switch>
        <Route exact path="/">
          <Articles onEditPost={(id) => editPostEvent(id)}/>
        </Route>
        <Route exact path="/profile">
          <Profile onHandleChangeUserInfo={(value) => setUserInfo(value)} userData={userData}/>
        </Route>
        <Route exact path="*" component={ NotFound }/>
      </Switch>
    </div>
  )
}
