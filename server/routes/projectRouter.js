const express = require('express');
const { Project, Category } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

router.post('/new', async (req, res) => {
  const {
    name, desc, img, category_id,
  } = req.body;
  const newProject = await Project.create({
    name, desc, img, category_id,
  });
  res.json(newProject);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByPk(id, { include: [{ model: Category }] });
  res.json(project);
});

router.get('/bycategory/:id', async (req, res) => {
  const { id } = req.params;
  const projectsInCategory = await Project.findAll({
    include: [{ model: Category }],
    where: { category_id: id },
  });
  res.json(projectsInCategory);
});

module.exports = router;
