var operation = [];



$(document).ready(function () {

$( "#7" ).click(function() {
  operation.push(7);
  console.log(operation);
});
$( "#8" ).click(function() {
  operation.push(8);
  console.log(operation);
});
$( "#addition" ).click(function() {
  operation.push("+");
  console.log(operation);
});
$( "#equal" ).click(function() {
  var result = [operation.join("")];
  console.log(result);
  return result;
});

});
