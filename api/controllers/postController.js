const db = require('../services/db')

exports.createNewPost = async function (req, res){
  const text = req.body.text
  const userId = req.body.userId
  try {
    await db('posts')
    .insert({
      user_id: userId,
      text: text,
    });
    res.send("Добавлен новый пост");
  } catch (error) {
    res.status(404).send(error);
  }  
};

exports.getAllPosts = async function(req, res){
  try {
    const allPosts = await db.select().from('posts');
    res.send(allPosts); 
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getPostsById = async function(req, res){
  const id = req.params.id
  try {
    const allPosts = await db.select().from('posts').where({ id: id });
    res.send(allPosts); 
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.updatePost = async function (req, res){
  const id = req.params.id
  const text = req.body.text
  const userId = req.body.userId
  console.log(req.body.text)
  try {
    await db('posts')
    .where({ id: id })
    .update({
      user_id: userId,
      text: text,
    });
    res.send(`update post - ${id}`);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.deletePost = async function (req, res){
  const id = req.params.id
  try {
    await db('posts').where({ id: id }).delete();
  } catch (error) {
    res.status(404).send(error);
  }
  res.send(`post - ${id} was deleted`);
};