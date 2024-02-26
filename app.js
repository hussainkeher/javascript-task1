// var a = "What is is your age"
// var b = prompt(a);
// alert(b);



// var a = prompt("first name");
// var b = prompt("last name");
// console.log(a,b)
// var a = +prompt("math")
// var b = +prompt("since")
// var c = +prompt("baiog")
// var d = +prompt("urdo")
// var e = +prompt("islamiyat")
// console.log(a+b+c+d+e)





// var a = 10
// var b = 20

// if (a==b) {
//     console.log("abkckjb");
// } 
// else {
//     console.log("uhbygyufufu");
// }
// var marks = 70
// if(marks >= 70){
//     console.log("mithai")
// }else if (marks >= 50){
//     console.log("ama ne bacha liya")
// }else{
//     console.log("donose dhulai")
// }

// var a = prompt("first name");
// var b = prompt("last name");
// console.log(a,b)
// var a = +prompt("math")
// var b = +prompt("science")
// var c = +prompt("bailogy")
// var d = +prompt("urdo")
// var e = +prompt("islamiyat")
// var m = a+b+c+d+e;
// var persentage = m / 500 * 100
// console.log(persentage)

// if(persentage >= 90 ){
//     console.log("a+ Grade")
// }else if(persentage >= 80){
//     console.log("a Grade")
// }else if(persentage >= 70){
//     console.log("b Grade")
// }else if(persentage >= 60){
//     console.log("c Grade")
// }else if(persentage >= 50){
//     console.log("d Grade")
// }else{
//     console.log("e Grade")
// }
var a = +prompt("math");
var b = +prompt("scince");
var c = +prompt("urdu");
var d = +prompt("biology");
var e = +prompt("islamiyat");
var m = (a+b+c+d+e);
var percentage = m / 500 *100;

document.getElementById("per").innerHTML = percentage
if(percentage >= 90){
    document.getElementById("grade").innerHTML = "A+ Grade"
}else if(percentage >= 80 ){
    document.getElementById("grade").innerHTML = "A Grade"
}else if(percentage >= 70){
    document.getElementById("grade").innerHTML = "B Grade"
}else if(percentage >= 60){
    document.getElementById("grade").innerHTML = "C Grade"
}else if(percentage >= 50){
    document.getElementById("grade").innerHTML = "E Grade"
}else{
    document.getElementById("grade").innerHTML = "F Grade"
}
