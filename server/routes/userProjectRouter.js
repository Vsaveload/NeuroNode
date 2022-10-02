const express = require('express');
const {
  Project, Statistic, Connection, Node,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const projects = await Project.findAll({
    where: { user_id: id },
    include:
      [{
        model: Statistic, include: [{ model: Connection, include: [{ model: Node }] }],
      }],
  });
  res.json(projects);
});

module.exports = router;
