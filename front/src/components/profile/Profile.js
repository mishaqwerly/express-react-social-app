import React from 'react'
import PropTypes from 'prop-types';
import userDataType from '../../shared/models/userDataType'
import './Profile.scss'

function Profile({onHandleChangeUserInfo, userData}) {
  
  function handleSubmit(event) {
    event.preventDefault();
    let userInfo = ''
    let userName = event.target[0].value.trim();
    let userSurname = event.target[1].value.trim();
    if (userName && userSurname) {
      userInfo = `(${userName} ${userSurname})`
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

Profile.propTypes = {
  onHandleChangeUserInfo: PropTypes.func.isRequired,
  userData: userDataType
};

export default Profile;
