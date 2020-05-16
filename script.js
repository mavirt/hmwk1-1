var name = "Maria";

var num1 = parseInt(prompt("Enter the firt numerical value", " "));
var num2 = parseInt(prompt("Enter the second numerical value", " "));

var hello = "Hello my name is "+name+"!";
var welcome = "Welcome to CIT 12000.";

var sum = num1 + num2;

document.querySelector(".first").innerHTML = hello;
document.querySelector(".second").innerHTML = welcome;
document.querySelector(".third").innerHTML = sum;