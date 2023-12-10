"use strict";
//IF ElSE STATEMENT 
//Example 1 we can write if condition like this
if (2 == 2) {
    console.log("2 is equal to 2");
}
if (2 > 3) {
    console.log("2 is less than 3");
}
else {
    console.log('2 is grater than 3');
}
;
//EXAMPLE 2
let firstname = "hamza";
let lastname = "syed";
if (firstname === "hamza" && lastname === "syed") {
    console.log("you are not allowes");
}
else {
    console.log("you are allow");
}
;
//Example 3
//  Condition 1 :In this condition both condition are true than answer is buy 
let budgut = 40000;
let cycle = 30000;
let color = "red";
if (budgut >= cycle && color === "red") {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
// //Contion 2 _ one condition is false so, answer don't buy
if (budgut >= cycle && color === "black") {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
// //CONDITION 3 : ADD ONE MORE COLOR
if (budgut >= cycle && color === "red" || color === "black") {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
// //CONDITION 4 : SHIFT LEFT SIDE TO RIGHT SIDE
if (color === "red" || color === "black" && budgut >= cycle) {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
// CONDITION 5: ADD ONE MORE COLOR
if (color === "red" || color === "black" || color === "pink" && budgut >= cycle) {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
//CONDITION 6 : IN THIS CONDITION FIRSTLY SOLVE LEFT SIDE THAN SOLVE RIGHT 
if ((color === "red" || color === "black") || (color === "pink" && budgut <= cycle)) {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
; //buy cycle
//CONDITION 7: IN THIS CONDITION FIRSTLY SOLVE LEFT SIDE THAN SOLVE RIGHT 
if ((color === "PURPLE" || color === "black") || (color === "pink" && budgut >= cycle)) {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
; //don't buy
//CONDITION 8: SHIFT ONE COLOR TO RIGHT SIDE
if (color === "black" || color === "red" && budgut <= cycle || color === "yellow") {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
; //don't buy
// //CONDITION 8: SHIFT ONE COLOR TO RIGHT SIDE
if (color === "black" || color === "pink" && budgut <= cycle || color === "red") {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
; //buy 
// //CONDITION 9: SHIFT ONE COLOR TO LEFT SIDE
if (color === "black" || color === "pink" || color === "red" && budgut <= cycle) {
    console.log("buy cycle");
}
else {
    console.log("don,t buy");
}
;
