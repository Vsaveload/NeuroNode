const express = require('express');
const { Category, Project } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.get('/allwithproject', async (req, res) => {
  const allCategories = await Category.findAll({ include: [{ model: Project }] });
  res.json(allCategories);
});

router.get('/byproject/:id', async (req, res) => {
  const { id } = req.params;
  const projects = await Project.findAll({ where: { category_id: id } });
  res.json(projects);
});

module.exports = router;
