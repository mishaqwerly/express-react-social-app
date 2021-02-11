import React from 'react'
import './Post.scss'

function Post() {
  return (
    <div className="post">
      <div className="post__name">
        Ivan
      </div>
      <div className="post__text">
      Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э.,
      </div>
      <div className="post__date">01:02:2021</div>
    </div>
  )
}

export default Post;
