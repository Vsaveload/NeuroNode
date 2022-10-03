const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.get('/logout', async (req, res) => {
  res.clearCookie('mega-cookie'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  const databaseUser = await User.findOne({
    where: {
      email: req.body.email,
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

router.post('/signup', async (req, res) => {
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

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

module.exports = router;
