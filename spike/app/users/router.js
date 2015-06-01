var User = require("./userModel");
var needUser = require("../middleware").needUser;
var router = require("express").Router();

function getEmployees(req, res, next) {
  User.findAllEmployees(function (err, employees) {
    if (err) {
      return next(err)
    }
    res.json(employees);
  });
}

function createUser(req, res, next) {
  res.status(201).send();
}

function signIn(req, res, next) {
  res.status(200).send();
}

router.post("/users", createUser );
router.get("/users/employees", getEmployees);
router.post("/users/sign-in", needUser, signIn);
router.get("/users/profile", needUser);

module.exports = router;
