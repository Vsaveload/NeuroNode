const express = require('express');
const rate = require('../db/models/rate');

const router = express.Router();

router.get('/favorites/', async (req, res) => {
  const favorite = await rate.findAll();
  res.json(favorite);
});

router.post('/favorites/:project', async (req, res) => {
  console.log(req.body);
  const { name, url } = req.body;
  await rate.create({ name, url });
  res.sendStatus(200);
});

module.exports = router;
