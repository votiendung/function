function myfunction(number){
    var result = number*number;
    return result;
    // document.getElementById("demo").innerHTML
}
// var f2 = myfunction(2);
// document.write("bp cua 2 laf: " + f2 + "<br>");
// var f5 = myfunction(5);
// document.write("bp cua 2 laf: " + f5);
function caculato() {
    var num = document.getElementById("demo").value;
    var result = myfunction(num);
    document.getElementById("result").innerHTML = result;
}