var React = require("react");
var EmployeeRow = require("./employeeRow.react");

module.exports = EmployeeList = React.createClass({displayName: "EmployeeList",
  render: function() {
    var rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(React.createElement(EmployeeRow, {employee: employee, key: employee._id}));
    }.bind(this));
    return (
        React.createElement("table", {style:{"borderSpacing": "10px"}}, 
          React.createElement("thead", null, 
              React.createElement("tr", null, 
                  React.createElement("th", {style:{"fontWeight": "bold"}}, "Name"), 
                  React.createElement("th", {style:{"fontWeight": "bold"}}, "Role")
              )
          ), 
          React.createElement("tbody", null, rows)
        )
    );
  }
});

