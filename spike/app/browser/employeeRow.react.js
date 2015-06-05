React = require('react');

module.exports = EmployeeRow = React.createClass({displayName: "EmployeeRow",
  render: function() {
    var firstname = this.props.employee.firstname;
    var lastname = this.props.employee.lastname;
    var role = this.props.employee.jobRole.role;
    return (
        React.createElement("tr", null, 
            React.createElement("td", null, firstname + " " + lastname), 
            React.createElement("td", null, role)
        )
    );
  }
});

