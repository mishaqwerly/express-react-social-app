import React from 'react'
import './Profile.scss'

export default function Profile({onHandleChangeUserInfo}) {
  
  function handleSubmit(event) {
    event.preventDefault();
    let userInfo = ''
    if (event.target[0].value.trim() && event.target[1].value.trim()) {
      userInfo = `(${event.target[0].value.trim()} ${event.target[1].value.trim()})`
    }
    onHandleChangeUserInfo(userInfo)
    event.target[0].value = ''
    event.target[1].value = ''
  }

  return (
    <div className="profile">
      Profile
      <form onSubmit={handleSubmit} className="form">
        <div className="form__input">
          <p className="form__input-title">User name</p>
          <input type="text" name="user_name"/>
        </div>
        <div className="form__input">
          <p className="form__input-title">User surname</p>
          <input type="text" name="user_surname"/>
        </div>
        <input type="submit" value="Отправить"/>
      </form>
    </div>
  )
}
