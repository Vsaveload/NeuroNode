const express = require('express');
const {
  Category, Project, Connection, Node,
} = require('../db/models');

const router = express.Router();

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { arrayOfConnections } = req.body;
    const editedNode = await Node.findByPk(id);
    await Connection.destroy({
      where: {
        from: id,
      },
    });
    await arrayOfConnections.forEach(async (nodeId) => {
      await Connection.create({ from: id, to: nodeId });
    });
    res.json(editedNode);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;