var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('get posts');
});

router.get('/:id', function(req, res) {
  res.send('get posts by id');
});

router.post('/', function(req, res) {
  res.send('create posts');
});

router.put('/:id', function(req, res) {
  res.send('update posts');
});

router.delete('/:id', function(req, res) {
  res.send('delete posts');
});

module.exports = router;