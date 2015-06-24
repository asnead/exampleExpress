var React = require("react");
var ComparisonBox = React.createFactory(require("./comparisonBox.jsx"));

React.render(
   ComparisonBox(),
   document.getElementById("comparison-container")
);
     
