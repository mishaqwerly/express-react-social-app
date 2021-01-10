
import React from 'react'
import './Profile.scss'

export default function Profile() {
  return (
    <div className="profile">
      Profile
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  )
}
