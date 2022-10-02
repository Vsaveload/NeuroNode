const express = require('express');
const { Node, Connection } = require('../db/models');

const router = express.Router();

router.get('/first/:id', async (req, res) => {
  const { id } = req.params;
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id, isFirst: true },
  });
  res.json(firstNode);
});

router.get('/byid/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id, {
    include:
      [{ model: Connection }],
  });
  res.json(node);
});

module.exports = router;
