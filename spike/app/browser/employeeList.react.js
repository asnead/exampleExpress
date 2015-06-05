var React = require("react");
var EmployeeRow = require("./employeeRow.react");

module.exports = EmployeeList = React.createClass({displayName: "EmployeeList",
  render: function() {
    var rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(React.createElement(EmployeeRow, {employee: employee, key: employee._id}));
    }.bind(this));
    return (
        React.createElement("table", null, 
          React.createElement("thead", null, 
              React.createElement("tr", null, 
                  React.createElement("th", null, "Name"), 
                  React.createElement("th", null, "Role")
              )
          ), 
          React.createElement("tbody", null, rows)
        )
    );
  }
});

