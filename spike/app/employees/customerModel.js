var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  firstname:          {type: String},
  lastname:           {type: String},
  username:           {type: String, required: true, index: {unique: true}},
  password:           {type: String, required: true},
  jobRole:            {
                        type: String,
                        cover: [{type: String}]
                      }     
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

//db schema or ORM schema etc

//function findAll(callback) {
  //// Query DB for a page of customers
  //// Mocked out here as out of scope
  //setImmediate(function () {
    //callback(null, [
      //{id: 1, name: "Jane Doe"},
      //{id: 2, name: "John Doe"}
    //]);
  //});
//}

//exports.findAll = findAll;
