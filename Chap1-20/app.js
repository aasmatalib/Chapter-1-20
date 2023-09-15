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
 Answer : if(x !==y){

    */

/* 2.	Code the first line of an if statement that tests whether the value represented
 by a variable is greater than or equal to the value represented by another variable.*/


/*3.	Code an if statement. Test whether a variable is unequal to a particular number. 
If so, assign a number to that variable.

var a;
var a = prompt("Enter a number");
if(a!==10){
a = 10 ;
console.log(a);
} */

/*4.	Code an if statement that tests whether a number is unequal to a different number. If the condition is true
 (it will be), display a congratulations alert.

 var a = prompt("enter first number");
 var b = prompt("enter second number");
  if(a!==b){
 alert("congradulations");
 
  } */

  /*5.	Code a prompt asking for your first name.
Code an if statement that tests whether the name you entered is unequal to another name.
If the condition is true (it will be), display an alert that says "No match"

var username = prompt("Enter username");
if(username !== "admin"){
alert("No match ");

} */

/*Chapter 12 (if…else and else if statements)*/
/*1.	Code an if statement that tests whether the value represented 
by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
var a = prompt("enter first number");
 var b = prompt("enter second number");
  if(a!==b){
 alert("congradulations");
 
  }else 
  alert("Enter roll number ");
  */

/*2.	Write a program using if else and else if statement which take marks from user. 
 the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)

 var marks = prompt("ENter your Marks");
 if(marks >= 80 && marks <=100) 
 {
    alert("A Grade");
 }else if (marks >= 70 && marks <= 80)
 {
    alert("B Grade");
 }else if (marks >= 60 && marks <= 70)
 {
    alert("C Grade");
 } */

/*3.	This is the if statement that begins the code.
if (a === 10) {
  alert("a is 10");
}
If a isn't 10, display an alert that says The correct value of a is 
var a = parseInt(prompt("Enter value for a"));
if (a === 10) {
    alert("a is 10");
  }else alert("The correct value of a is ___________"); */

  /*4.	Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi.
If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore.
Otherwise, display a different alert.

var city = prompt("enter your city ");
var input = city.toUpperCase();
if(input === "KARACHI"){
alert("Your city is Karachi");

}else if(input === "LAHORE"){

    alert("your city is Lahore");

}
else
{
    alert("whats your city then ?");
}
*/

/*Chapter 13 (Testing sets of conditions)

1.	Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
if(a===b && c===d)
*/
/*2.	Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.*/

/*3.	Code the first line of an if statement that tests whether 
I.	name is either "Hamza" or "Arsalan".
II.	age is Less than 60.
if((Name === "Hamza" || Name === "Arsalan") && (age <= 60)){
    */
   /*4.	Declare two variables and assign them number values.
If the first variable is less than the second variable or greater than the second variable, display an alert.

var a = prompt("Enter first number ");
var b = prompt("Enter second number");

if((a < b) || (a > b)){
    alert("Not equal numbers");}

else {alert("You enetered Equal Numbers")};
*/
/*5.	Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name.
If your answers match the two variables, display an alert.
var fName = prompt("ENter your firts name");
var lName = prompt("ENter you last name");

if(fName === "asma") && (lName === "talib"){
    alert("you entered your name");
}
*/


/*===================================
Chapter 14 (If statements nested)
=====================================*/

/*1.	Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5  
, then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".


var input = prompt("Enter password");
var len = input.length; // Use .length to get the length of a string
console.log(len);

if (len !== null) { // Corrected the condition
    if (len >= 5) { // Corrected the condition and added a missing closing brace
        // Your code for a password length of at least 5 characters goes here
    } else {
        console.log("Password must be at least 5 characters long.");
    }
} else {
    console.log("You didn't enter a password.");
}
} */

/*2.	Try this statement by yourself
if (a === 1) {
 if (c === "Max") {
    alert("OK");
  }
}

a and c are not defined output -> variable undefined */

/*3.	Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1) {
  if (c === "Max") {
 alert("OK");
  }
}*/

/*4.	Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the first variable
 equals the second variable and also whether it is less than or equal to the second variable.
  If the test passes—and it will—display an alert message.


var a = 10 ;
var b = 12;
if((a<b) || (a>b)){
alert("not equal");

}else {
    alert("Equal");}*/

   /*==================================
    Chapter 15 (Array I)
    ===================================
    */

    /* 1.	Declare an empty array.
    var names =[]'
    */
/*2.	Code an array with 1 string element
var names = ['asma'];

*/
/*3.	var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index 
var alphabet = ["h","i","j","k"];
alert("alphabet[2]");*/

/*4.	var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
var alphabet = ["h","i","j","k" , "h","i","j","k"];
var len = alphabet.length;
alert(len); */

/*5.	Declare an array with one element and Add a second element with index in array.
Create an alert whose message is the new element.
var fName = ['asma'];
fName.push('myname');
var index = fName.indexOf(fName[1]);
alert(index);

*/
/*Chapter 16 (Array II)*/
/*
1.	Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.

var fName = ['asma'];
fName.push('myname');
var index = fName.indexOf(fName[1]);
alert(fName[index +1]);
*/
/* 2.	var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.

var Alphabet = ["h","i","j","k"];
var text = Alphabet.pop();*/

/*3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.

var Alphabet=["h","i","j","k"];
Alphabet.push("l");
console.log(Alphabet);
*/

/*3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.
Chapter 16 (Array III)
*/
/* 1.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Remove the first element of an array.
var myArray = [1, 2, 3, 4, 5]; 
myArray.shift(); 
console.log(myArray); 
*/

/*2.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1,2,3);
console.log(sizes);
*/

/* 3.	Declare an array with one element.
Add a second element to the beginning of the array.
Create an alert whose message is the new first element.
var arr= [1];
arr.unshift("2");
alert(arr[0]);*/

/*

4.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0, "L");
console.log(sizes);

*/

/*5.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array, regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var newSizes = sizes.splice(3,0);
console.log(newSizes);*/

/*6.	var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1,2);
pets.splice(1,0,"monkey" , "donkey" , "bear");
console.log(pets);
*/
/* 7.	var pets = ["dog", "cat", "ox", "duck", "frog"];
Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
console.log(pets);
*/
/*8.	var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
pets.splice(0,3);
console.log(pets);*/

/*Chapter 17 - 20 (for Loops)*/

/* 1.	Write a statement in which loop is to run 10 times. 
var a;
for(a=0 ;a< 10 ;a++) {
    console.log("print no" + (a+1) );
}*/
/*2.	Code the first line of a for loop with the usual counter name, usual starting value,
 and usual increment. Run it 12 times using <= to specify how many loops.

 for(var  i =0 ; i< 13 ; i++){
    console.log("print no" + (i) );

}
*/
/* 3.	What are the 5 characters missing from this code, excluding any spaces that are missing? 
Type them in order, with no spaces or commas between them.
for( var i = 0 ; i <= 4 ; i++)*/
/*4.	Code the first line of a for loop with a counter name that's not i.
Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

for(var a = 0 ; a<100 ; a++){

    console.log("print no" + (a+1) );*/

}

/*5.	Code the first line of a for loop with the usual counter and the usual starting value. 
Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for(var i = 3 ; i>0 ; i--){

    console.log("print no" + i );

}*/

/*6.	The statement assigns the number of elements in the array to the variable
var arr = [1,2,3,4,5,6,7];
var b = arr.length;
console.log(b); */
/* 7.	Set a variable named “flag” with an initial Boolean value of your choice.

var flag = true;*/

/*8.	Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing.
 Limit the number of loops by the number of elements in the array pets.

 var pets = [ "cat", "dog" , "monkey", "bear", "panda"];
 var len = pets.length;
 for(var a =0 ;a<len; a++){
    console.log(pets[a]);*/

    /*9.	Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop.
for(var a = 0 ; a< 11 ;a++){
    console.log(a);
    
if(a == 1) break;
}
*/

/*10.	Create an array which contains user names
Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by 
the number of elements in the array user names.
Code an if statement that tests the presense of (user name) in an array.

var firstName = prompt( "Enter first name");
console.log(firstName);
let len = firstName.length;
console.log(len);

var userName = ["tom" , "jerry" , "bear" , "panda" , "monkey"];
var fName = prompt("Enter first name");

for(var i = 0 ; i< userName.length ; i++){
if(fName === userName[i]){
alert("Welcome " + userName[i]);
}
*/

/*11.	Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
};


var userInput = +prompt("Enter a number");
var list = [1, 2, 3, 4];
var matchFound = false; // Initialize matchFound outside the loop

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    matchFound = true;
    break; // Exit the loop if a match is found
  }
}

if (matchFound) {
  alert("Match found");
} else {
  alert("No match found");
}*/

/*12.	var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
After that concatenate the both loops.

Expected Output:
a1
a2
a3
a4
…
f6

var firstArr = [ "a", "b", "c", "d", "e", "f"];

var secondArr = [1, 2, 3, 4, 5, 6];
for(var i = 0 ;i< firstArr.length ; i++){
for(var j  = 0 ; j < secondArr.length  ; j++){

console.log(firstArr[i] + secondArr[j]);
}

}
*/


 