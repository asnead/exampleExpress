var customer = require("./customerModel");
var log = require("bole")("customers/router");
var router = require("express").Router();

function getEmployees(req, res, next) {
  customer.findAll(function (err, customers) {
    if (err) {
      return next(err)
    }
    res.json(customers);
  });
}

function createCustomer(req, res, next) {
  res.status(201).send();
}

router.post("/customers", createCustomer);
router.get("/customers", getCustomers);

module.exports = router;
