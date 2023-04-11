var express = require("express");
var router = express.Router();
const { Task } = require("../sequelize/models");
const db = require("../sequelize/models");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));
/* GET users listing. */
router.get("/", function (req, res, next) {
  //FIX THE ISSUE OF SENDING DATA. FINDING BY PRIMARY KEY DOESN'T CRASH THE APP ANYMORE
  Task.findAll().then((data) => {
    res.status(200).send(data);
  });
});

module.exports = router;
