import PropTypes from 'prop-types';

const baseUserInfoType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
});

const userAvatarType = PropTypes.shape({
  fileId: PropTypes.number,
  file: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    path: PropTypes.string,
    size: PropTypes.number
  })
});

const userLikesType = PropTypes.shape({
  userId: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number
  }),
  date: PropTypes.string,
})

const UserArticlesType = PropTypes.shape({
  title: PropTypes.string,
  text: PropTypes.string,
  images: PropTypes.arrayOf(userAvatarType),
  createdAt: PropTypes.string,
  editedAt: PropTypes.string,
  likes: PropTypes.arrayOf(userLikesType),
});

const userDataType = PropTypes.shape({
  baseUserInfoType,
  userAvatarType,
  friends: PropTypes.arrayOf(baseUserInfoType),
  articles: PropTypes.arrayOf(UserArticlesType)
});

export default userDataType;
