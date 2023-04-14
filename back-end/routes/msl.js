var express = require('express');
var router = express.Router();
const { Msl } = require('../sequelize/models');

// Get list of tasks
router.get('/', function (req, res, next) {
  Msl.findAll().then((data) => {
    res.status(200).send(data);
  });
});

// Post a new Msl
router.post('/', async (req, res, next) => {
  const mslEntry = req.body;
  try {
    const newEntry = await Msl.create(mslEntry);
    res.status(201).json(newEntry); // return the created Msl
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create Entry' });
  }
});

// Patch a Msl (assign to a specific user)
// may get deprecated if we move to a specific table where tasks and userIDs are correlated
router.patch('/:id', async (req, res, next) => {
  const entryId = req.params.id;
  const updatedEntry = req.body;
  console.log(updatedEntry);
  try {
    const entry = await Msl.findByPk(entryId);

    if (!entry) {
      return res.status(404).send(' not found');
    }

    await Msl.update(updatedEntry, {
      where: { id: entryId },
    });

    return res.send('MSL Entry updated successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
});

module.exports = router;
