const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config();
const port = process.env.PORT;
const app = express()
const posts = require('./routes/posts');
const auth = require('./routes/auth');
const passport = require('passport')
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/posts', posts);
app.use('/auth', auth);

app.use((req, res) => {
  res.status(404).send('404');
});

app.use((err, req, res, next) => {
  res.status(500).send('500');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})