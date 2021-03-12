const express = require('express');
const validator = require('../middleware/validator');
const router = express.Router();
const postController = require('../controllers/postController');
const passport = require('passport');
const {checkAuthorized} = require('../middleware/acl');
const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, user, trace) => {
    req.user = user;
    next();
  })(req, res, next);
};

router.get("/",[authenticate], postController.getAllPosts);
// router.get("/", postController.getAllPosts);
router.get('/:id', postController.getPostsById);
//router.post('/',[authenticate], postController.createNewPost)
router.post('/',
  validator({
    text: ['required','min:5','max:100'],
    userId: ['required'],
    title: ['required','min:10','max:100'],
    available: ['required'],
  }),
  postController.createNewPost
 )
router.put('/:id',
  validator({
    text: ['required','min:5','max:100'],
    userId: ['required'],
    title: ['required','min:10','max:100'],
    available: ['required'],
  }),
  [authenticate, checkAuthorized('posts', 'user_id')],
  postController.updatePost
 )
router.delete('/:id',[authenticate,checkAuthorized('posts', 'user_id')],
  postController.deletePost
)

module.exports = router;