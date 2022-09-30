require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const { User } = require('./db/models');

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'no_secure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/logout', async (req, res) => {
  res.clearCookie('mega-cookie'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

app.post('/login', async (req, res) => {
  const databaseUser = await User.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (databaseUser && await bcrypt.compare(req.body.password, databaseUser.password)) {
    const sessionData = {
      name: databaseUser.name,
      email: databaseUser.email,
      id: databaseUser.id,
    };
    req.session.userSession = sessionData;
    res.json(sessionData);
  } else res.sendStatus(401);
});

app.post('/signup', async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      password,
      name: req.body.name,
      email: req.body.email,
    },
  });
  const sessionData = {
    name: currentUser.name,
    email: currentUser.email,
    id: currentUser.id,
  };
  req.session.userSession = sessionData;
  if (!created) res.sendStatus(405);
  else res.json({ name: currentUser.name, email: currentUser.email, id: currentUser.id });
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
