import React from 'react'
import './Articles.scss'

import Post from '../post/Post'

function Articles() {
  return (
    <div className="articles page">
      Articles
      <div className="articles__list">
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Articles;
