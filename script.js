var operation = [];
// var integer = "";
var math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
    '*': function (x, y) { return x*y }
    '/': function (x, y) { return x/y }
}​​​​​​​;
function countIt () {
  for (i =0; i < operation.length; i++) {
    if (operation[i].hasOwnProperty("*" || "-" || "/" || "-")) {
      math_it_up[operation[i]](operation[i-1], operation [i+1])
    }
  }
}

math_it_up['+'](1, 2) == 3;
$(document).ready(function () {

$( "#0" ).click(function() {
  operation.push(0);
  $("#display").html(operation);
  console.log(operation);
});
$( "#1" ).click(function() {
  operation.push(1);
  // integer += 1;
  // console.log(integer);
  $("#display").html(operation);
  console.log(operation);
});
$( "#2" ).click(function() {
  operation.push(2);
  // integer += 2;
  // console.log(integer);
  $("#display").html(operation);
  console.log(operation);
});
$( "#3" ).click(function() {
  operation.push(3);
  $("#display").html(operation);
  console.log(operation);
});
$( "#4" ).click(function() {
  operation.push(4);
  $("#display").html(operation);
  console.log(operation);
});
$( "#5" ).click(function() {
  operation.push(5);
  $("#display").html(operation);
  console.log(operation);
});
$( "#6" ).click(function() {
  operation.push(6);
  $("#display").html(operation);
  console.log(operation);
});
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
$( "#9" ).click(function  () {
  operation.push(9);
  $("#display").html(operation);
  console.log(operation);
});
$( "#addition" ).click(function() {
  operation.push("+");

  $("#display").html(operation);
  console.log(operation);
});
$( "#substraction" ).click(function() {
  operation.push("-");
  $("#display").html(operation);
  console.log(operation);
});
$( "#division" ).click(function() {
  operation.push("/");
  $("#display").html(operation);
  console.log(operation);
});
$( "#multiplication" ).click(function() {
  operation.push("*");
  $("#display").html(operation);
  console.log(operation);
});
$( "#dot" ).click(function() {
  operation.push(".");
  $("#display").html(operation);
  console.log(operation);
});
$( "#AC" ).click(function() {
  operation = [0];
  $("#display").html(operation);
  console.log(operation);
});
$( "#CE" ).click(function() {
  operation.pop();
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
