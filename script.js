// var operation = [];
// //
// // document.addEventListener("click", getButton);
//
// var test = document.getElementById("calculator");
// console.log(test);


var reply_click = function()
{
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}
document.getElementById('AC').onclick = reply_click;
document.getElementById('CE').onclick = reply_click;
document.getElementById('3').onclick = reply_click;

//
// function whatClicked(evt) {
//     alert(evt.target.id);
// }
//
// test.addEventListener("click", whatClicked, false);
//
// function getButton() {
// return
// }
