var express = require("express");
var router = express.Router();
const { Task } = require("../sequelize/models");

router.get("/", function (req, res, next) {
  Task.findAll().then((data) => {
    res.status(200).send(data);
  });
});

module.exports = router;
