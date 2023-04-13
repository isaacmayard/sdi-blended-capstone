var express = require("express");

var router = express.Router();
const { User } = require("../sequelize/models");

/* GET list of users */
router.get("/", function (req, res, next) {
  User.findAll().then((data) => {
    res.status(200).send(data);
  });
});



module.exports = router;
