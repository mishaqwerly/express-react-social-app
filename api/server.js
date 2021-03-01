const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const posts = require('./routes/posts');
const auth = require('./routes/auth');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./middleware/passport')(passport)
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send(`User not logged in `)
  }
}

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/failed', (req, res) => res.send('You Failed to log in!'))
app.get('/good', isLoggedIn, (req, res) => {
  res.send(`Welcome mr ${req.user.displayName}!`)
})

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/good');
  }
);

app.use('/posts', posts);
app.use('/auth', auth);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

app.use((req, res) => {
  res.status(404).send('404');
});

app.use((err, req, res, next) => {
  res.status(500).send('500');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})