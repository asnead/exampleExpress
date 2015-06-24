React = require('react');

module.exports = ComparisonCSRSearch = React.createClass({displayName: "ComparisonCSRSearch",
  render: function() {
    return (
        <div>
          <p className="P_3">Choose a CSR</p>
          <div className="DIV_4">
            <input className="INPUT_5" placeholder="CSR" type="text"/>
          </div>
        </div>
    );
  }
});
