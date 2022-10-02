require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const bcrypt = require('bcrypt');
const userRouter = require('./routes/userRouter');
const statRouter = require('./routes/statRouter');
const projectRouter = require('./routes/projectRouter');
const categoryRouter = require('./routes/categoryRouter');
const nodeRouter = require('./routes/nodeRouter');

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
app.use('/auth', userRouter);
app.use('/stat', statRouter);
app.use('/project', projectRouter);
app.use('/category', categoryRouter);
app.use('/node', nodeRouter);

app.listen(process.env.PORT, () => {
  console.log('Server start: ', process.env.PORT);
});
