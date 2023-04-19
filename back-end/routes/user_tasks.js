var express = require("express");
const { QueryTypes } = require("sequelize");
const db = require("../sequelize/models");

var router = express.Router();
const { Task, User, user_tasks } = require("../sequelize/models");

/* GET list of users and correlated tasks */
router.get("/", function (req, res, next) {
  user_tasks.findAll().then((data) => {
    res.status(200).send(data);
  });
});

// Get list of tasks of logged in user
router.get("/:userId", function (req, res) {
  // user_tasks.findAll({
  //   where: {
  //     userId: req.params.userId,
  //   },
  // });
  db.sequelize
    .query(
      `SELECT * FROM "Tasks" JOIN user_tasks ON user_tasks."taskId" = "Tasks".id WHERE user_tasks."userId" = ${req.params.userId}`,
      { type: QueryTypes.SELECT }
    )
    .then((data) => {
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
