$(document).ready(function () {
var initDisplay = 0;
var numbers = [];
//
// var display = function(x){
//   if (x != "*" || x != "/" || x != "+" || x != "-"){
//     numbers.push(x);
//     $("#display").html(numbers);
//   }
  // else if (x != "*" || x != "/" || x != "+" || x != "-" && ("#display").html === true){
  //    $("#display").html( $("#display").html + x);
  // }
  // else $("#display").html(x);
// }

$(".button").click(function(){
  var buttonValue = $(this).attr("value");
  // if (buttonValue === "*" || buttonValue === "/" || buttonValue === "+" || buttonValue === "-"){
  //   $("#display").html(buttonValue);}
  if (buttonValue === "AC"){
    numbers = [];
    $("#display").html(initDisplay);
  }

  else if (buttonValue === "CE"){
    numbers.pop();
    // if (numbers.length = 0){
    //   $("#display").html(initDisplay)
    // }
    // else $("#display").html(numbers);
  }

  else if (buttonValue != "="){
    numbers.push(buttonValue);
    $("#display").html(numbers);
  }

  else {
    $("#display").html(eval(numbers.join("")));
    numbers = [];
    // numbers.push = (eval(numbers.join("")))};
}

  // if (buttonValue === "*" || buttonValue === "/" || buttonValue === "+" || buttonValue === "-"){
  //   display($(this).attr("value"));}
  // else display($(this).attr("value"));
})

})
