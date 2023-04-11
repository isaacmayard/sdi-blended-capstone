var express = require("express");
var router = express.Router();
const { User } = require("../sequelize/models");

/* GET list of users */
router.get("/", function (req, res, next) {
  //FIX THE ISSUE OF SENDING DATA. FINDING BY PRIMARY KEY DOESN'T CRASH THE APP ANYMORE
  db.User.findByPk(1).then((data) => res.status(200).send("SUCCESS"));
});

module.exports = router;
