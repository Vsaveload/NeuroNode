const express = require('express');
const { Project, Category } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

router.post('/new', async (req, res) => {
  const {
    name, desc, img, categoryID, userId,
  } = req.body;
  const newProject = await Project.create({
    name, desc, img, category_id: categoryID, user_id: userId,
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

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, img } = req.body;
    const editedProject = await Project.findByPk(id);
    await editedProject.update({ name, desc, img });
    res.json(editedProject);
  } catch (err) {
    console.log(err);
  }
});

router.get('/cards', async (req, res) => {
  const firstCard = await Project.findAll({
    include: [{ model: Category }],
    where: { user_id: id },
  });

  res.json(firstCard);
});
module.exports = router;
