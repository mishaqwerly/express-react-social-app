import React from 'react'
import './Post.scss'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

function Post({content, hendlersEdit}) {
  return (
    <div className="post">
      <div className="post__name">
        User - {content.user_id}
      </div>
      <div className="post__name">
        {content.title}
      </div>
      <div className="post__text">
        {content.text}
      </div>
      <div className="post__footer">
        <div className="post__date">01:02:2021</div>
        <Button variant="outlined" color="primary" onClick={() => hendlersEdit(content.id)}>Edit - {content.id}</Button>
      </div>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Post;
