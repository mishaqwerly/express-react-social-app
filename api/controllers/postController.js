const db = require('../services/db')

exports.addPost = function (req, res){
  res.send("Добавление поста");
};

exports.getPosts = function(req, res){
  db.select().from('goods').then(
    data => { 
      res.send(data); 
    }
  );
};

exports.getPostsById = function (req, res){
  res.send(req.params.id);
};

exports.updatePost = function (req, res){
  res.send(`update post - ${req.params.id}`);
};

exports.deletePost = function (req, res){
  res.send(`delete post - ${req.params.id}`);
};