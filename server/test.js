const { Node, Connection } = require('./db/models');

// Node.findAll({ where: { project_id: 1, isFirst: true } }).then(console.log);

Node.findAll({ include: [{ model: Connection }], where: { project_id: 1, isFirst: true } })
  .then(console.log);

// Connection.findAll({ where: { from: 1 } })
//   .then(console.log);

// Node.findAll().then(console.log());
