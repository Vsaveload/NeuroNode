/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Project, Node, Connection } = require('./db/models');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/projects', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

app.get('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id, isFirst: true },
  });
  res.json(firstNode);
});

app.get('/node/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id, { include: [{ model: Connection }] });
  res.json(node);
});

app.listen(PORT, () => console.log(`We cruisin on: ${PORT}`));
