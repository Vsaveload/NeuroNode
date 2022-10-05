/* eslint-disable camelcase */
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

router.get('/allinproject/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id);
  const firstNode = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: node.project_id },
  });
  res.json(firstNode);
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allNodes = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id },
  });
  // let newData = {};
  // const nodesNew = [];
  // const linksNew = [];
  // allNodes?.map((node) => node.Connections
  //   .map((connection) => linksNew.push({ source: connection.from, target: connection.to })));
  // allNodes?.map((node) => nodesNew.push({ id: node.id }));
  // newData = { nodes: nodesNew, links: linksNew };
  res.json(allNodes);
});

// router.get('/list/:id', async (req, res) => {
//   const { id } = req.params;
//   console.log('----------------------------------', id);
//   const allNodes = await Node.findAll({
//     include: [{ model: Connection }],
//     where: { project_id: id },
//   });
//   res.json(allNodes);
// });
router.get('/byid/:id', async (req, res) => {
  const { id } = req.params;
  const node = await Node.findByPk(id, {
    include:
      [{ model: Connection }],
  });
  res.json(node);
});

router.post('/new', async (req, res) => {
  const {
    name, content, project_id, isFirst,
  } = req.body;
  const newNode = await Node.create({
    name, content, project_id, isFirst,
  });
  res.json(newNode);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content } = req.body;
    let { isFirst } = req.body;
    switch (isFirst) {
      case 'true':
        isFirst = true;
        break;
      case 'false':
        isFirst = false;
        break;
      case 'null':
        isFirst = null;
        break;
      case undefined:
        break;
      default:
        break;
    }
    console.log('assssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaa', isFirst); // aaaaaaaaaaaaaaaaaaaaa
    const editedNode = await Node.findByPk(id);
    await editedNode.update({ name, content, isFirst });
    res.json(editedNode);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Node.destroy({ where: { id } });
    await Connection.destroy({
      where: { from: id },
    });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
