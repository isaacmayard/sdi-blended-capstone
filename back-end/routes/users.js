var express = require("express");
var router = express.Router();
const db = require("../models");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));
/* GET users listing. */
router.get("/", function (req, res, next) {
  //FIX THE ISSUE OF SENDING DATA. FINDING BY PRIMARY KEY DOESN'T CRASH THE APP ANYMORE
  db.User.findByPk(1).then(data => res.status(200).send("SUCCESS"));
});

module.exports = router;
