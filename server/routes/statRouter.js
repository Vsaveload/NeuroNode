/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const express = require('express');
const {
  Statistic, Connection, Project, Node,
} = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  const { to, from, id } = req.body; // Нужно: передать сюда Nodes: откуда и куда переход
  const connection = await Connection.findOne({ where: { to, from } });
  const newStat = await Statistic.create({
    project_id: id, connection_id: connection.id, // Сюда будет занесён именно Connection.id
  });
  res.json(newStat);
});

router.get('/all', async (req, res) => {
  const stats = await Statistic.findAll({
    include:
      [{ model: Connection, include: [{ model: Node }] }],
  });
  res.json(stats);
});

router.get('/byid/:id', async (req, res) => {
  const { id } = req.params;
  const projectStat = await Project.findByPk(id, {
    include:
          [{
            model: Statistic,
            include: [{
              model: Connection,
              include: [{ model: Node, where: { project_id: id } }],
            }],
          }],
  });

  const tempArr = [];
  const countObj = {};
  const namesArr = [];
  if (projectStat.Statistics) {
    projectStat.Statistics.forEach((el) => tempArr.push(`${el.Connection.from}-${el.Connection.to}`));
    projectStat.Statistics.forEach((el) => namesArr.push({ [`${el.Connection.from}-${el.Connection.to}`]: `${el.Connection.Node.name}` }));
  }

  if (tempArr) {
    for (let i = 0; i < tempArr.length; i++) {
      if (!countObj[tempArr[i]])countObj[tempArr[i]] = 1;
      else countObj[tempArr[i]] += 1;
    }
  }
  const newData = [];

  for (const key in countObj) {
    newData.push({
      name: key,
      Nodes: countObj[key],
      atm: countObj[key],
    });
  }
  const result = { newData, namesArr, projectStat };
  res.json(result);
});
router.patch('/byid/:id', async (req, res) => {
  const { id } = req.params;
  const projectStat = await Project.findByPk(id, {
    include:
          [{
            model: Statistic,
            include: [{
              model: Connection,
              include: [{ model: Node, where: { project_id: id } }],
            }],
          }],
  });

  const tempArr = [];
  const countObj = {};
  const namesArr = [];
  if (projectStat.Statistics) {
    projectStat.Statistics.forEach((el) => tempArr.push(`${el.Connection.from}-${el.Connection.to}`));
    projectStat.Statistics.forEach((el) => namesArr.push({ [`${el.Connection.from}-${el.Connection.to}`]: `${el.Connection.Node.name}` }));
  }

  if (tempArr) {
    for (let i = 0; i < tempArr.length; i++) {
      if (!countObj[tempArr[i]])countObj[tempArr[i]] = 1;
      else countObj[tempArr[i]] += 1;
    }
  }
  const newData = [];

  for (const key in countObj) {
    newData.push({
      name: key,
      Nodes: countObj[key],
      atm: countObj[key],
    });
  }
  const result = { newData, namesArr, projectStat };
  res.json(result);
});

module.exports = router;
