const express = require('express')
require("dotenv").config();
const port = process.env.PORT;
const app = express()
const posts = require('./routes/posts');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', posts);

app.use(function(request, response, next){
  console.log("Middleware 1");
  next();
});

app.use((req, res) => {
  res.status(404).send('404');
});

app.use((err, req, res, next) => {
  res.status(500).send('500');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})