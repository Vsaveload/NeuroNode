const express = require('express');
const {
  Connection, Node,
} = require('../db/models');

const router = express.Router();

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { connections } = req.body;
    const editedNode = await Node.findByPk(id);
    await Connection.destroy({
      where: {
        from: id,
      },
    });
    await connections.forEach(async (nodeId) => {
      await Connection.create({ from: id, to: nodeId });
    });
    res.json(editedNode);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
