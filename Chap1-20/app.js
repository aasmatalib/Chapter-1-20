/*=====================================================================
Chapter 1 
===================================================================
1.
Question 1 : Alert these following (individually): 
I.	First Name
II.	Last Name
III.	Email
IV.	Phone Number
V.	Password 

==========
Solution
==========
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");*/

/* Question 2.	Correct this statement: alert"You're learning JavaScript!";

==========
Solution
========== 
alert("You're learning JavaScript!");*/

/* Question 3.	Code an alert statement displaying any message you like. 

alert("JS Assignments");*/

/* ================================================
Chapter 2 (Variables for string)
==================================================

Question 1 : Declare any variable in the camelCase format.
    Solution : 
    var myName; 

Question 2 : Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
    var myName;
    myName = " Asma ";*/

    /*3.	Declare the variable teamName and Alert your Team name.
    var teamName = "My Team";
alert(teamName);*/

/*4.	This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Alpha";
alert(bestMan);*/

/*=====================================================================
Chapter 3
===================================================================

/* 1.	Declare a variable “caseQty”

var caseQty;*/

/* 2.	Assign to the variable caseQty, which has already been declared, the value 144.*/

/*3.	Rewrite this statement so the variable can be used in a math operation. var num = "9"; 
var num = 9 ;
alert(num);
console.log(num);*/

/* 4.	In one statement declare a variable. In a second statement assign it the sum of 2 numbers. 
var sum;
sum = 1+2 ;
alert(sum); */


/*5.	What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
Try it yourself. 
Answer: 
110 */

/*6.	In the first statement declare a variable and assign it a number. 
In the second statement, change the value of the variable by adding it together with a number.

var a = 12;
a = a + 1;*/

/*=============================================
Chapter 4 (Variable names Legal and Illegal)
============================================
1.	Correct this statement.
var product_cost = 3.45 ;
alert(product_cost);*/

/*2.	Rewrite this using camelCase.
var Nameofband;

Answer : var nameOfband;*/

/* 3.	In a single statement declare a legally-named variable and assign a number to it. 
var sumOfnumber = 12;*/

/* 4.	Declare a variable that is a combination of your first and last names. Use camelCase.
var asmaTalib ;*/

/*5.	List the legal and Illegal Variables.*/

/*============================
Chapter 5 (Math Expression I)
============================== */

/*1.	What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
 % modulus */

 /*2.	What is the value of num?
var num = 20 % 6; 

Answer : 2 */

/* 3.	In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000. 
let largeNum = BigInt(1000) * BigInt(2000);
*/

/*4.	Assign to a variable the value represented by one variable subtracted from the value represented by another variable 
var a = 20 ;
var b = 12;
var c = a - b;
*/

/*5.	Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.

var a = 12%7;
*/
/* 6.	Code an alert that displays the result of a multiplication on 2 numbers. 

a = alert(3*4);
console.log(a);
*/

/* Chapter 6 (Math Expression II)*/

/* 1.	Code a short form of x = x + 1; Use either of the two legal expressions.
x++; */

/*2.	If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
--x ;
*/

/* 3.	var x = 50;
var y = x++;
What is the value of y?

Answer : 50 
*/

/* 4.	var y = 50;
var z = --y;
What is the value of z?

Answer : 49

*/

/*5.	In a single statement, decrement num and assign its original value to newNum.

var newNum = -- num ; */

/* 6.	In a single statement add 1 to a variable and assign its original value to another variable
 b = ++a; */

 /*Assign a number value to a variable. 
Increment the variable.
Display the new value in an alert


var a= 10 ;
++a;
alert(a);*/

/*Chapter 7 (Math Expression III)*/

/* 1.	var calculatedNum = 2 + (2 * 6);
What is the value of calculatedNum? 

Answer 14 */

/* 2.	var calculatedNum = (2 + 2) * 6;
What is the value of calculatedNum?

24
3.	var calculatedNum = (2 + 2) * (4 + 2);
What is the value of calculatedNum?
24
4.	var calculatedNum = ((2 + 2) * 4) + 2;
What is the value of calculatedNum?
18
*/

/* 5.	Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

  var cost  =   (2 + 2 ) * (4 + 10) */


/* .	Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.

    var units =   2 + (2  * 4 + 10) ;

*/

/*
7.	Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing .5
the result will be .5 not 5
var pressure  =   4 /( 2 * 4 );*/



/* Chapter 8 (Concatenating Text Strings)*/

/* 1.	var num = "2" + "2";
What is the value of num? Include quotation marks.

22
*/
/*2.	message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
Alert the statement

message = ("Hello," + "Dolly");
alert(message);
Answer : Hello,Dolly
*/

/*
3.	alert("33" + 3);
What message displays in the alert box?
*/

333
*/

/*
4.	Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
*/
/* 5.	Write a statement that assigns to a variable the concatenation of a string with a number
var fbid = "name"+123 ; 
alert(fbid);*/

/* 6.	Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var fName = " Asma";
var lName = "Talib";
var fullName = fName + lName;
alert(fullName); */

/*

/*==========================================================
Chapter 9 (Prompts)
===========================================================
*/

/* 1.	Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter your name");
alert("Welcome " + "" + firstName); */

/* 2.	Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country  = prompt("country", "China");

alert(country); 

/*
3.	Correct this statement
var yourName = prompt(Enter Your Name");

Answer: 
var yourName = prompt("Enter Your Name");
console.log(yourName);*/

/* 4.	Code a prompt that specifies a string as the message Include a default input. 
var name = "Asma" ;
var message = prompt("Welcome" + name );
console.log(message);*/

/*
5.	Assign strings to two variables. Code a prompt specifying the first variable as the message 
and the second variable as the default response. Assign the user's response to a third variable.
var greetings = "Hello";
var named = "John";
var response  = prompt(greetings + "Please Enter your Name " + named );
console.log(response); */

/*6.	Display a prompt, including both a message and a default response.
Display the user's response in an alert.


var input = prompt("Your Name ", "NickName ");
alert("Hi" +  input);
*/

/*Chapter 10 (if statments) */

/* var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement:
Also try this statement by yourself 
 Answer :
 var city = "Karachi";
 if (city === "Karachi") {
 console.log("The City OF Lights");}
 */

 /*if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

var x;
var y;
var z;
if (x === y) {
    
    var  answer = prompt("what's value for z");
 console.log(answer);
} 
*/

/*3.	Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

var zipcode = prompt("enter zipcode ?");
if(zipcode == '10010'){
alert("Karachi");

}
else 
{alert("Please enter correct city");}
*/

/* 4.	Code an if statement. Test whether a variable has a particular numerical value. 
If so, assign a new value to that variable, as in x = 1; 

var x = 10 ;
if(x === 10 ){
    x = ++x;
}
console.log(x);
*/

/* Chapter 11 (Comparison Operators)*/

/* 1 . Code the first line of an if statement that tests whether one variable is unequal to another. (Use !) 
if(x !==y){

    */

    