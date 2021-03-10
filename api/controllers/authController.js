const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const db = require('../services/db')

exports.login = async function (req, res){

  const email = req.body.email;
  const password = req.body.password;
  const candidate = await db('users').where({email: email}).first();

  if (candidate) {
    const passwordResult = bcryptjs.compareSync(password, candidate.password);
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate.user_id
      },'dev-jwt', {expiresIn: 60 * 60})
      res.status(200).json({
        token: `Bearer ${token}`
      });
    } else {
      res.status(401).json({
        message: 'password not match'
      })
    }
  } else {
    res.status(404).json({
      message: 'user not found'
    })
  }
};

exports.register = async function (req, res){

  const name = req.body.name;
  const email = req.body.email;
  const candidate = await db('users').where({email: email}).first()

  if (candidate) {
    res.status(409).json({
      message: 'user already registered'
    })
  } else {
    const solt = bcryptjs.genSaltSync(5)
    const password = req.body.password;
    try {
      await db('users').insert({
        name: name,
        password: bcryptjs.hashSync(password, solt),
        email: email,
      })
      res.status(201).json({ message: 'create new user'}) 
    } catch (error) {
      console.log(error)
    }
  }
};

exports.editUser = async function (req, res){
  console.log('User data has been updated')
  res.send("User data has been updated");
}
