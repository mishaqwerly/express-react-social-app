import React from 'react'
import './Post.scss'
import PropTypes from 'prop-types';

function Post({content}) {
  return (
    <div className="post">
      <div className="post__name">
        User - {content.user_id}
      </div>
      <div className="post__text">
        {content.text}
      </div>
      <div className="post__date">01:02:2021</div>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    text: PropTypes.string,
  }),
};

export default Post;
