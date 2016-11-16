var operation = [];


$(document).ready(function () {

$( "#7" ).click(function() {
  operation.push(7);
  $("#display").html(operation);
  console.log(operation);
});
$( "#8" ).click(function  () {
  operation.push(8);
  $("#display").html(operation);
  console.log(operation);
});
$( "#addition" ).click(function() {
  operation.push("+");
  $("#display").html(operation);
  console.log(operation);
});
$( "#AC" ).click(function() {
  operation = [0];
  $("#display").html(operation);
  console.log(operation);
});
$( "#equal" ).click(function() {
  var result = eval(operation.join(""));
  $("#display").html(operation);
  console.log(result);
  $("#display").html(result);
});



});
