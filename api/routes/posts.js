var express = require('express');
var router = express.Router();
const postController = require("../controllers/postController");
const passport = require('passport');

//router.get("/",passport.authenticate('jwt', {session: false} ), postController.getPosts);
router.get("/", postController.getPosts);
router.get('/:id', postController.getPostsById);
router.post('/', postController.addPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports = router;