const xArray = ["Mumbai", "Delhi", "Bangluru", "Kolkatta", "UP"];
const yArray = [550, 490, 120, 1002, 255];

const layout = {title:"Product Sell Report"};

const data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);