const express = require('express');
const router = express.Router();
const postController = require("../controllers/postController");
const passport = require('passport');
const {checkAuthorized} = require("../middleware/acl");

router.get("/",[passport.authenticate('jwt', {session: false} ), checkAuthorized('posts', 'user_id')], postController.getAllPosts);
//router.get("/",[passport.authenticate('jwt', {session: false} )], postController.getAllPosts);
// router.get("/", postController.getAllPosts);
router.get('/:id', postController.getPostsById);
router.post('/',[passport.authenticate('jwt', {session: false} ), checkAuthorized('posts', 'user_id')], postController.createNewPost)
router.put('/:id',[passport.authenticate('jwt', {session: false} ), checkAuthorized('posts', 'user_id')], postController.updatePost)
router.delete('/:id',[passport.authenticate('jwt', {session: false} ), checkAuthorized('posts', 'user_id')], postController.deletePost)

module.exports = router;