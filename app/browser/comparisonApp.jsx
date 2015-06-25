var React = require("react");
var ComparisonBox = React.createFactory(require("./comparisonContainer.jsx"));

React.render(
   ComparisonBox(),
   document.getElementById("comparison-container")
);
     
