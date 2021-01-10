var express = require('express');
var router = express.Router();
const db = require('../services/db')

router.get('/', function(req, res) {
  db.select().from('goods').then(
    data => { 
        res.send(data); 
    }
  );
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