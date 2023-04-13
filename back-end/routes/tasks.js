var express = require("express");
var router = express.Router();
const { Task } = require("../sequelize/models");

// Get list of tasks
router.get("/", function (req, res, next) {
  Task.findAll().then((data) => {
    res.status(200).send(data);
  });
});

// Post a new task
router.post("/", async (req, res, next) => {
  const task = req.body;
  try {
    const newTask = await Task.create(task);
    res.status(201).json(newTask); // return the created task
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task" });
  }
});

// Patch a task (assign to a specific user)
// may get deprecated if we move to a specific table where tasks and userIDs are correlated
router.patch("/:id", async (req, res, next) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  console.log(updatedTask);
  try {
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    await Task.update(updatedTask, {
      where: { id: taskId },
    });

    return res.send("Task updated successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

module.exports = router;