const express = require('express');
const {
  Statistic, Connection, Project, Node,
} = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  const { id, nodeId } = req.body;
  const newStat = await Statistic.create({
    project_id: id, connection_id: nodeId,
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
          [{ model: Statistic, include: [{ model: Connection, include: [{ model: Node }] }] }],
  });
  res.json(projectStat);
});

module.exports = router;
