var test = require("tape");
var User = require("./userModel");

test("User.findAllEmployees should return an array", function(assert) {
  User.findAllEmployees(function(error, result) {
    assert.error(error);
    assert.ok(Array.isArray(result));
    assert.end();
  });
});
