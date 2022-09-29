require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
// const { User } = require('./db/models');

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

app.get('/auth', async (req, res) => {
  try {
    const result = await User.findByPk(req.session.userId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.post('/auth', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ name }],
      },
    });

    if (user && (await bcrypt.compare(password, user.password) || password === user.password)) {
      req.session.name = user.name;
      req.session.userId = user.id;
      return res.json(user);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create(
      { email, password: hashedPassword, name },
    );

    if (newUser.id) {
      req.session.name = newUser.name;
      req.session.userId = newUser.id;
      return res.json(newUser);
    }

    return res.json({});
  } catch (error) {
    return res.json(error);
  }
});


// app.get('/logout', async (req, res) => {
//   try {
//     req.session.destroy();
//     res.clearCookie('mega-cookie');
//     res.sendStatus(200);
//   } catch (error) {
//     res.json(error);
//   }
// });



app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
