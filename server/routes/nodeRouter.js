/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
const express = require('express');
const { Node, Connection } = require('../db/models');

const router = express.Router();

router.get('/first/:id', async (req, res) => {
  const { id } = req.params;
  const response = await Node.findAll({
    include: [{ model: Connection }],
    where: { project_id: id, isFirst: true },
  });

  const firstNodePrev = { ...response[0] };
  const newObj = {};
  for (const key in firstNodePrev) {
    if (key === 'dataValues') {
      for (const keyData in firstNodePrev[key]) {
        newObj[keyData] = firstNodePrev[key][keyData];
      }
    } else {
      // newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
      //   const to = await Node.findByPk(el.to);
      //   return ({ ...el, nameTo: to });
      // }));
      newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
        const to = await Node.findByPk(el.to);
        return ({
          id: el.id, from: el.from, to: el.to, nameTo: to.name,
        });
      }));
    }
  }
  // const connectionsNew = firstNodePrev.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // });
  // firstNodePrev.Connections = await Promise.all(connectionsNew);
  // console.log(firstNodePrev.Connections);
  // console.log('CONNECTIONS!!!!!!!', firstNode.Connections);
  // const firstNode0 = firstNodePrev.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // });
  // console.log(await Promise.all(connectionsNew));
  // const firstNode = await Promise.all(firstNode0);
  // const firstNode = {
  //   ...firstNodePrev,
  //   dataValues: { ...firstNodePrev.dataValues, Connections: await Promise.all(connectionsNew) },
  // };
  // console.log(firstNode);
  // firstNode.Connections = firstNode.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, nameTo: to.name };
  // });
  // const firstNode = [{ ...firstNodePrev }];
  // console.log(firstNode);
  res.json([newObj]);
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
  const projectNode = await Node.findByPk(id);
  const projectID = projectNode.project_id;
  console.log('sadasdasdasdgdsfhsdfh', projectID);
  const response = await Node.findAll({
    include: [{ model: Connection }],
    where: { id, project_id: projectID },
  });

  const firstNodePrev = { ...response[0] };
  const newObj = {};
  for (const key in firstNodePrev) {
    if (key === 'dataValues') {
      for (const keyData in firstNodePrev[key]) {
        newObj[keyData] = firstNodePrev[key][keyData];
      }
    } else {
      // newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
      //   const to = await Node.findByPk(el.to);
      //   return ({ ...el, nameTo: to });
      // }));
      newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
        const to = await Node.findByPk(el.to);
        return ({
          id: el.id, from: el.from, to: el.to, nameTo: to.name,
        });
      }));
    }
  }
  // const connectionsNew = firstNodePrev.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // });
  // firstNodePrev.Connections = await Promise.all(connectionsNew);
  // console.log(firstNodePrev.Connections);
  // console.log('CONNECTIONS!!!!!!!', firstNode.Connections);
  // const firstNode0 = firstNodePrev.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // });
  // console.log(await Promise.all(connectionsNew));
  // const firstNode = await Promise.all(firstNode0);
  // const firstNode = {
  //   ...firstNodePrev,
  //   dataValues: { ...firstNodePrev.dataValues, Connections: await Promise.all(connectionsNew) },
  // };
  // console.log(firstNode);
  // firstNode.Connections = firstNode.Connections.map(async (connection) => {
  //   const to = await Node.findByPk(connection.to);
  //   return { ...connection, nameTo: to.name };
  // });
  // const firstNode = [{ ...firstNodePrev }];
  // console.log(firstNode);
  res.json([newObj]);
  // const { id } = req.params;
  // const response = await Node.findByPk(id, {
  //   include:
  //     [{ model: Connection }],
  // });

  // const firstNodePrev = { ...response };
  // const newObj = {};
  // for (const key in firstNodePrev) {
  //   if (key === 'dataValues') {
  //     for (const keyData in firstNodePrev[key]) {
  //       newObj[keyData] = firstNodePrev[key][keyData];
  //     }
  //   } else {
  //     // newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
  //     //   const to = await Node.findByPk(el.to);
  //     //   return ({ ...el, nameTo: to });
  //     // }));
  //     newObj.Connections = await Promise.all(firstNodePrev.Connections.map(async (el) => {
  //       const to = await Node.findByPk(el.to);
  //       return ({
  //         id: el.id, from: el.from, to: el.to, nameTo: to.name,
  //       });
  //     }));
  //   }
  // }
  // // const connectionsNew = firstNodePrev.Connections.map(async (connection) => {
  // //   const to = await Node.findByPk(connection.to);
  // //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // // });
  // // firstNodePrev.Connections = await Promise.all(connectionsNew);
  // // console.log(firstNodePrev.Connections);
  // // console.log('CONNECTIONS!!!!!!!', firstNode.Connections);
  // // const firstNode0 = firstNodePrev.Connections.map(async (connection) => {
  // //   const to = await Node.findByPk(connection.to);
  // //   return { ...connection, dataValues: { ...connection.dataValues, nameTo: to.name } };
  // // });
  // // console.log(await Promise.all(connectionsNew));
  // // const firstNode = await Promise.all(firstNode0);
  // // const firstNode = {
  // //   ...firstNodePrev,
  // //   dataValues: { ...firstNodePrev.dataValues, Connections: await Promise.all(connectionsNew) },
  // // };
  // // console.log(firstNode);
  // // firstNode.Connections = firstNode.Connections.map(async (connection) => {
  // //   const to = await Node.findByPk(connection.to);
  // //   return { ...connection, nameTo: to.name };
  // // });
  // // const firstNode = [{ ...firstNodePrev }];
  // // console.log(firstNode);
  // res.json([newObj]);
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
