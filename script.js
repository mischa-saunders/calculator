$(document).ready(function () {

var display = function(x){
  $("#display").html(x);
}

$("#button").click(function(){
  alert("clicked "+$(this).attr("value"));
  display($(this).attr("value"));
})

})
