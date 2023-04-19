var express = require('express');
var router = express.Router();
const { Tag } = require('../sequelize/models');

// Get list of tasks
router.get('/', function (req, res, next) {
  Tag.findAll().then((data) => {
    res.status(200).send(data);
  });
});

// Post a new Tag
router.post('/', async (req, res, next) => {
  const tagEntry = req.body;
  try {
    const newTag = await Tag.create(tagEntry);
    res.status(201).json(tagEntry); // return the created Tag
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create Entry' });
  }
});

// Patch a Tag (assign to a specific user)
// may get deprecated if we move to a specific table where tasks and userIDs are correlated
router.patch('/:id', async (req, res, next) => {
  const tagId = req.params.id;
  const updatedTag = req.body;
  console.log(updatedTag);
  try {
    const entry = await Tag.findByPk(tagId);

    if (!entry) {
      return res.status(404).send(' not found');
    }

    await Tag.update(updatedTag, {
      where: { id: TagId },
    });

    return res.send('Tag Entry updated successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
});

module.exports = router;
