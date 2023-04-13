var express = require("express");

var router = express.Router();
const { user_tasks } = require("../sequelize/models");

/* GET list of users and correlated tasks */
router.get("/", function (req, res, next) {
  user_tasks.findAll().then((data) => {
    res.status(200).send(data);
  });
});

// Post a new task/user relationship
router.post("/", async (req, res, next) => {
  const relationship = req.body;
  try {
    const newRelation = await user_tasks.bulkCreate(relationship);
    console.log(newRelation);
    res.status(201).json(newRelation); // return the created task
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task" });
  }
});

module.exports = router;
