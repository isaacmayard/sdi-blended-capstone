var express = require("express");

var router = express.Router();
const { User } = require("../sequelize/models");

/* GET list of users */
router.get("/", function (req, res, next) {
  User.findAll().then((data) => {
    res.status(200).send(data);
  });
});

/* POST user */

router.post("/", async function (req, res, next) {
  const newUser = req.body;
  try {
    await User.create(newUser);
    res.status(201).json(newUser);
    console.log(`${newUser} created`);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
