/*==========================================
Chapter 21 (Changing Case)
============================================ */
/*
1.	Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself

var userInput = prompt(userInput);
var allLower = userInput.toLowerCase();
console.log(allLower);.*/

/*
2.	Convert the string represented by x to lower-case and assign the result to the same variable.
var str = "X";
var str = str.toLowerCase();
console.log(str);
*/
/*3.	Convert the string represented by y to upper-case and assign the result to the same variable.
var str = "y";
var str = str.toUpperCase();
console.log(str);
*/
/*4.	Convert the string represented by a variable to lower-case and assign
 the result to a second variable that hasn't been declared beforehand.

 var str = "Name";
 var cvrt = str.toLowerCase();
 console.log(cvrt);*/
 /*5.	Convert the string represented by an array element to lower-case and 
 assign it to a variable that hasn't been declared beforehand.
 var userName  = [ "TEXT" ] ;
var userNameCvrt = userName[0].toLowerCase();
console.log(userNameCvrt);*/

/*6.	Display in an alert the upper-case version of the string represented by a variable.
var userName = "asma";
var userNameUpper = userName.toUpperCase();
alert(userNameUpper);*/

/*7.	var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word
 with its first letter in uppercase and the remaining letters in lowercase.

var cityName = "kaRacHi";
var cityNameUpper = cityName.toUpperCase();
alert(cityNameUpper);*/

/*==================================
Chapter 22 - 25 (Strings)
===================================*/
/* 1.	"captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

samewords = "captain";
var smword = samewords.slice(1,3 );
console.log(smword);
*/

/*2.	The number of characters in the string will be assigned to the variable.
var text = "username";
var len = text.length;
console.log(len);*/

/*3.	The string "elephant" has been assigned to the variable animal. Slice the four middle characters 
out of the string and assign it to the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2,6);
console.log(seg);*/

/*4.	Find the number of characters in the string represented by a variable and assign the number to a second variable.
var str  ="Text";
var len = str.length;
console.log(len);*/
/*5.	In a first statement measure how many characters there are in a string represented by a variable. 
In a second statement slice all but the first character and last 3 characters
 of the string and assign it to a second variable that hasn't been declared beforehand.

 var str1 ="username";
 var len = str1.length;
console.log(len);
 var str2 = str1.slice(1 , 5) ;
 console.log(str2);*/

 /*6.	var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx?

3
*/

/*7.	var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
16
*/

/*8.	Find the index of the first character of the last instance of "go" in the string represented by
 the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
the string text is missing

var text = "Your text goes here. This is where we find the last 'go'.";
var str = "go";
var indx = text.lastIndexOf(str);
console.log(indx);
*/

/*9.	Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (typeof str[indexNum] !== 'undefined') {
    
  }
  */

  /*10.	In this string "abcde", what character is at index 2? (Use charAt

var str  = "abcde";
var chr = str.charAt(2);
console.log(chr);)*/

/*11.	Find the 10th character in the string represented by text and assign it to 
the variable cha, which hasn't been declared beforehand.
var text = "This is myName ";
var cha =  text.charAt(10);
console.log(cha);*/

/*12.	Find the last character in the string represented by str and assign it to x, 
which hasn't been declared beforehand.

var str = "this is my name";
var len = str.length;
var x = str.charAt(len-1);
console.log(x);
*/

/*.	Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

var text = "This is myName ";
var cha =  text.charAt(5);
console.log(cha);
*/
/*
14.	Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.

var text = "This is myName ";
var cha= text.charAt(3)
if(cha == 's'){


console.log(cha);
}
/*
15.	Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an
 array that has been declared beforehand.*/
 /*
 var text = " Hello , how are you ?";
 var txt = [];
 var len = text.length;
 
 for (var i = 0; i < len; i++) {
   var str = text.charAt(i);
   txt.push(str); // Push the character, not the index
 }
 
 console.log(txt);
 

In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, 
which hasn't been declared beforehand.*/

/*
var text = "no , this me";
var text = text.replace("no" , "yes");
console.log(text);

/*
16.	In a string represented by str replace the first instance of "1" with "one" and 
assign the revised string to newStr, which hasn't been declared beforehand.

var str = "point no 1";
var newStr = str.replace(1, one);
console.log(newStr);
var str = "point no 1";
var newStr = str.replace(1, "one");
console.log(newStr);
*/
/*17.	If you want all instances replaced, enter 3 characters that need to appear in this statement.
var y = x.replace("a", "z");

var y = x.replace("/a /g", "z");*/

/* ===============================
Chapter 26 (Rounding Numbers)
================================*/

/* 1.	Form a statement that rounds a number to the nearest integer.

var a =1.2;
var rd = Math.round(a);
console.log(rd); */
/*2.	Round up a number represented by origNum and assign it to roundNum,
 which hasn't been declared beforehand.
 var origNum= 1.2;
 var roundNum = Math.round(origNum);
 console.log(roundNum);*/
 /*3.	Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
 4.	Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
 var origNum= 1.2;
 var roundNum = Math.round(origNum);
 console.log(roundNum);

*/
/* 5.	Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

var a = .0 ;
var b =  Math.round(a);
console.log(b);*/

/* ================================
Chapter 27 (Random Numbers)
==================================*/
/* 1.	Convert a random number generated by JavaScript to a number in the range 1 to 50 
var num = Math.random();
var numrandome = (50*num)+1;
var round = Math.round(numrandome);
console.log(round);
console.log(numrandome);*/
/*2.	Generate a random number and assign it to a variable that hasn't been declared beforehand.
var num = Math.random();
*/
/*3.	You have to create a dice in JavaScript with the use of pseudo-random number.
var num = Math.random();
var numrandome = Math.floor(6*num)+1;
var round = Math.round(numrandome);
console.log(round);
*/
/*
4.	You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number. 
var num = Math.random();
var numrandome = Math.floor(2*num)+1;
console.log(numrandome);
var round = Math.round(numrandome);
console.log(round);
if(round <=1 ) {alert("head");}
else {alert("Tail");}
*/

/*=======================================
Chapter 28, 29 (Converting Strings)
========================================*/
/* 1.	How do you convert a string to an integer in JavaScript?
var ans = prompt("Enter your age");
console.log(typeof(ans));
var num = parseInt(ans);
console.log(typeof(num));
*/
/*2.	Write a JavaScript function to convert the string "123" to an integer.
var string = "123";
var num = parseInt(ans);
*/
/*3.	How can you convert a string containing a decimal number to a floating-point number in JavaScript?
parseFloat();
*/
/*4.	How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

using typeof function 
*/
/*5.	How can you convert a number to a string in JavaScript?
var intstr = "24";
console.log(typeof(intstr));
var  num = Number(intstr);
console.log(typeof(num));
*/

/*6.	Write a JavaScript function to convert the number 42 to a string.

var intstr = 42;
console.log(typeof(intstr));
var  num = intstr.toString();
console.log(typeof(num));
*/
/*
7.	Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?


var integerString = "3.14";
console.log(typeof(integerString));
var num = Number(integerString);
console.log(typeof(num));
*/
/*====================================================
Chapter 30 (Controlling the length of decimals)
====================================================== */

/* 1.	Code a statement that rounds a number represented by num to 4 places, 
converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

var num = 12.3456734242343423;
num = num.toFixed(4);
var newNum = num.toString();
console.log(newNum);*/

/*2.	In a single statement round a number represented by a variable to 2 places, 
convert it to a string, convert it back to a number, and assign it to the same variable.

var num = ((12.3456734242343423).toFixed(2)).toString();
*/

/*3.	Code the first line of an if statement that tests whether 
the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

if((num.toFixed(2)).toString().length > 4 )
*/
/*4.	Assign a number with many decimal places to a variable.
Code an alert that displays the number rounded to 2 decimal places and converted to a string.


var num = 12.232323112545;
var str =num.toFixed(2).toString();
alert(str);
alert(typeof(str));
*/


/*=====================================================================
Chapter 31 - 34 (Date & Time)
=======================================================================*/
/*
1.	Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.

var rightNowdObj = new Date();
*/
/*2.	Code a statement that creates a new Date object, converts it to a string,
 and assigns the string to dStr, which hasn't been declared beforehand.
 var dStr = new Date().toString();*/

 /*3.	Code a statement that extracts the day of the week from a Date object represented 
 by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.getDay();*/
/*4.	The day has been extracted from the Date object and assigned to d. The names of the days
 of the week have been assigned to the array dayNames. Alert the current day with array index.

 var week = ["mon","tue", "wed","Thur","Fri","sat", "sun"];
var rightNow = new Date();
var theDay = rightNow.getDay();
alert("Today is " + week[theDay-1]);*/
/*
/*5.	Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currYr = d.getFullYear();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds()
*/
/*6.	Code a statement that creates a Date object for the last day of the last
 month of 2020 and assigns it to later, which hasn't been declared beforehand.
 var lastDay = new Date("DEC 31,2020");
*/

/*7.	Create a Date object for the second day of the second month of 1992 and assign
 it to a variable that hasn't been declared beforehand.

 var lastDay = new Date("FEB 02,1992");*/

 /*8.	Code a single statement that displays in an alert the milliseconds 
 that elapsed between the reference date and the beginning of 1980.
 var diff = (new Date("June 30, 2035").getTime()) - (new Date("Jan 01, 1980").getTime());
 console.log(diff);
 */
/*9.	How do you change the year of a date in JavaScript?

var dt = new Date();
dt.setFullYear(2024);*/
/*

/*10.	Write a JavaScript function to change the month of a given date to January.
var dt = new Date();
dt.setMonth(1);
/*11.	What is the method to change the day of the week for a specific date in JavaScript?
var dt = new Date();
dt.setDate(1);*/
/*12.	Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

var min = prompt("ENter your minutes");
min = parseInt(min);
var dt =new Date();
dt.setMinutes(min);

var gt = dt.getMinutes();
console.log("time is " + gt);
*/
/*13.	Write a JavaScript function to add a specific number of hours to a given time.

var hours = prompt("ENter your hours");
hours = parseInt(hours);
var dt =new Date();
dt.setHours(dt.getHours() +hours);

var gt = dt.getHours();
console.log("time is " + gt);

*/
/*14.	You have to create a age calculator in JavaScript.

var age = prompt("what is your date of birth in yyyy-mm-dd");
var dt= new Date();
var dob= new Date(age);

var agmsc = dt - dob;
var age_in_years = (agmsc/(365.25 * 24 * 60 * 60 * 1000));
age_in_years = Math.floor(age_in_years);
 console.log(age_in_years);*/

 /*========================================
 Chapter 35 - 37 (Functions)
 ==========================================*/

 /*1 .	Code the first line of a function displayAlert.
 function displayAlert(){ alert("This is function alert");} displayAlert();*/

 /*2.	Code a function named askName that prompts the user to "Enter name"
  and assigns the answer to userName, which hasn't been declared beforehand.
  function askName(){

    let userName = prompt("enter your name");
   alert("wellcome " + userName);
     } askName();
     */

     /*3.	Code a function that calls 2 other functions.
     function username()
     {return prompt("Enter yourname ");}

     function greetings()
     {return prompt("ENter greetings");}

function webuser(){
   var usernames = username(); 
    var greet = greetings();
console.log(   greet + " " + usernames );
}
 webuser();

*/

/*4.	Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

function names(){

    var nm =  prompt("Enter name");
    alert(nm);
  }names();
*/

/*5.	Code the first line of a function named concat that has 3 parameters,
 the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
 function concat(vr , str, num){

    alert(vr + str + num );
    
     }
     var vr = "myName";
     concat(vr, "Hello" , 3);
     */

/*6.	Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

concat (var1, var2){
    var sum = var1 + var2;
    
    console.log(sum);
    }concat(10,23);
/*


/*7.	Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function volume (length, breadth , height){

    var vol = length*breadth*height;
    alert("The vol of aphere is " + " " + vol);
    } volume( 10, 20 ,23);
*/

/*8. 10	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

arr = [1, 3, 4];
var sum = 0;

for (let i = 0; i < arr.length; ++i) {
  sum += arr[i];
  console.log("Partial sum after adding " + arr[i] + " is " + sum);
}

console.log("Total sum is " + sum);*/

/*9.	Write a JavaScript function that takes two parameters and returns their sum.
function sum(v1, v2) {
    return v1 + v2;
  }
  
  let num = sum(10, 12); 
  console.log(num);
  
*/

/*11.	You have to capture the returned value from a function and store it in a variable? 

function answer(){

  return prompt("whats your name?");
   }
  var answ;
  answ = answer();
  console.log(answ);
  */

  /*12.	Write a function which tells letter counts of (word).

  function counts() {
    let message = prompt("Enter your word");
    let len = message.length;
    let spaceCount = 0; 
  
    for (var i = 0; i < len; ++i) {
      if (message.charAt(i) === " ") {
        spaceCount++; 
      }
    }
  
    return spaceCount; 
  }
  
  let letters = counts();
  console.log("Number of spaces: " + letters);
  */

/*
/*13.	Write a function to set (year) in date object.

function year(){

  let dt = new Date();
   dt.setFullYear(2024);
  return dt;
  } var dt = year();
  console.log(dt);
  */
 /*14.	Write a function which tells the age of a person who Born on (dateOfBirth)


 function age(){

  var dob = prompt("enter your DOB as YYYY-MM_DD");
  var brth = new Date(dob);
  var now = new Date();
  let milliseconds =  now - brth ;
  diff =milliseconds / (1000 * 60 * 60 * 24 * 365.25)
  let agenow = Math.floor(diff);
  return agenow;
  } var prnt = age();
  console.log(prnt);
  */


  /*15.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false

var arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
var usr = prompt("enter username");
function str(usr){
for(var i = 0 ; i< arr.length ; i++){
if(arr[i] === usr)
return true;}
return false; 
}

var exists = str(usr);

if (exists) {
  alert("User exists");
} else {
  alert("User does not exist");
}*/
/*16.	Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10)*/
/*17.	write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse()

function customReverse(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

var arr = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = customReverse(arr);
console.log(reversedArray);*/

/*Chapter 38 (Local vs. Global Variables)
1.	Write a JavaScript function that demonstrates the usage of a local variable.
function add(){
var sum = 2+4;

}*/

/*2.	How can you access a global variable inside a function in JavaScript?

by its name */

/*Chapter 39, 40 (Switch Statements)
1.	Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

var op = prompt("enter operator");
var a = prompt("enter first numer");
a = parseInt(a);
var b = prompt("enter second number");
b = parseInt(b);
switch(op)
{
case '+':
a + b ;
alert(a+b);
 break;

case '*':
    a*b;
    alert(a*b);
    break;
case '-':
a - b ;
alert(a-b);
 break;

case '/':
    a/b;
    alert(a/b);
    break;
}*/

/*2.	Write a JavaScript switch statement that check whether cityName given by user check the cityName
 if match alert the user and break the statement, if not default message will be shown to user.


var city = prompt("Enter city");


switch(city)
{
case 'karachi':
alert("you typed karachi");
 break;

 case 'lahore':
  alert("you typed lahore");
   break;

case 'islamabad':
alert("you typed islamabad");
 break;

 default:
  alert("city");
}
*/





