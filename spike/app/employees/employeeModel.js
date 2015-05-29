var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  firstname:          {type: String},
  lastname:           {type: String},
  username:           {type: String, required: true, index: {unique: true}},
  password:           {type: String, required: true}
  jobRole:            {
                        type: String,
                        cover: [{type: String}]
                      }     
});

EmployeeSchema.statics.findAll = function(callback) {
  this.find({}, function(err, employees) {
    if (err) { 
      return callback(err) 
    }
    callback(null, employees);
  });
};


var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;



