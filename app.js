/*
Question 1: Variable Declarations and Initialization.
Create three variables: productName (string with value "Laptop"),
price (number with value 999.99) and,
inStock (boolean with value true). 
Console.log all three variables in a single statement.
*/

// Answer 1:

let productName = "Laptop";
let price = 999.99;
let inStock = true;

console.log(productName, price, inStock);




/*
Question 2: Mathematical Operations
Calculate and display:

The remainder when 27 is divided by 4
The square of 12 (using exponentiation operator **)
The result of incrementing 8 by 1 using the ++ operator
The result of decrementing 15 by 2 using the -= operator
*/

// Answer 2:

let remainder = 27/4;
console.log(remainder);


const square = 12**2;
console.log(square);


let increment = 8;
increment++

console.log(increment);


let decrement = 15;
--decrement;
--decrement;

console.log(decrement);



/*
Question 3: String Concatenation and Case Conversion:

Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space,
then convert the result to proper case (first letter uppercase, rest lowercase).
Also find the total length of the full name.
*/

// Answer 3:


let firstName = "alex"
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
let lastName = " SMITH".toLowerCase();

let fullName = firstName + lastName;
let lengthOf = fullName.length;

console.log(fullName);




/*
Question 4: if-else Conditional Logic:

Write an if-else statement that checks a temperature variable.
If temperature is above 30, console.log "Hot day". 
If between 20 and 30 (inclusive), console.log "Pleasant day". 
Otherwise, console.log "Cold day". Test with temperature = 25.
*/


// Answer 4:


let temperature = 35;

if(temperature === 35){
    console.log("Hot day");

}else if(temperature === 20,30){
    console.log("Pleasant day");

}else if(temperature === 25){
    console.log("Cold day");
}





/*
Question 5: Comparison Operators
Create three comparison operations:

Check if 15 is strictly equal to "15"
Check if 20 is greater than 15 AND less than 25
Check if 10 is not equal to 10 OR 5 is greater than 3
*/

// Answer 5:


if(15 === "15"){
    console.log("Correct");
}else{
    console.log("Not equal to");
}


if(20 > 15 && 20 < 25){
    console.log("Correct");
}else{
    console.log("Not Correct");
}


if(10 !== 10 || 5 > 3){
    console.log("Correct");
}else{
    console.log("Not Correct");
}




/*
Question 6: Array Manipulation - Basics
Create an array colors with values ["red", "green", "blue"]. Then:

Add "yellow" to the end
Remove the first element
Insert "purple" at index 1
Console.log the final array and its length
*/


// Answer 6:


let colors = ["red", "green", "blue"];
colors.shift();
colors.unshift("purple")

console.log(colors, colors.length);




/*
Question 7: Array Manipulation - splice()
Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

Remove "cherry"
Replace "date" with "dragonfruit"
Extract the middle 3 elements into a new array
*/ 


// Answer 7:


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2,1);
fruits.splice(2, 1, "dragonfruit");
let extract = fruits.splice(1, 3);
console.log(extract);




/*
Question 8: for Loop - Number Sequence:
Write a for loop that prints numbers from 1 to 10,
but skips number 5 using continue, and stops at 8 using break.
Also calculate the sum of all printed numbers.
*/


// Answer 8:


let sumValue = 0;
for(let i=1; i<=10; i++){
    if(i === 5){
        continue;
    }else if(i === 8){
        break;
    }

    sumValue += i;
}

console.log(sumValue);






/*
Question 9: Nested for Loop - Pattern
Write nested for loops to create this pattern:

*
**
***
****
*****

*/


// Answer 9:


for(let j=1; j<=5; j++){
    console.log("*" .repeat(j))
}




/*
Question 10: String Methods - Search and Extract
Given text = "The quick brown fox jumps over the lazy dog":

Find the position of "fox"
Extract "brown fox" using substring/slice
Check if the text contains "dog"
Get the character at position 10
*/


// Answer 10:


let text = "The quick brown fox jumps over the lazy dog";

const a= text.indexOf("fox");
const b= text.slice(10, 20);

if(text === "dog"){
    console.log("Have");
}else{
    console.log("Don't Have");
}

const c= text.charAt(10);





/*
Question 11: String Replacement
Given sentence = "I love JavaScript and JavaScript is awesome":

Replace the first "JavaScript" with "coding"
Replace ALL "JavaScript" with "JS"
Replace "awesome" with uppercase "AWESOME"
*/


// Answer 11:


let sentence = "I love JavaScript and JavaScript is awesome";

let d= sentence.replace("JavaScript", "coding");
let e= sentence.replaceAll("JavaScript", "JS");
let replaceToUpper = sentence.replace("awesome", "awesome".toUpperCase());





/*
Question 12: Number Rounding and Formatting
Given num = 123.456789:

Round to 2 decimal places
Round to nearest integer
Get the floor value
Get the ceiling value
Format to show exactly 4 decimal places
*/


// Answer 12:


let num = 123.456789;

let math1 = Math.round(num)/10;
let math2 = Math.round(num);
let math3 = Math.floor(num);
let math4 = Math.ceil(num);
let math5 = Math.round(num)*10;





/*
Question 13: Random Number Generation
Generate:

A random integer between 1 and 100 (inclusive)
A random decimal between 0 and 1 with 3 decimal places
A random number between 50 and 75 (inclusive)
*/


// Answer 13:


let random1 = Math.random()*100;
let r = Math.round(random1);

let random2 = (Math.random()*2).toFixed(3);
let random3 = Math.floor(Math.random() * 26) + 50;





/*
Question 14: Type Conversion
Perform these conversions:

Convert string "123" to number
Convert string "45.67" to decimal (float)
Convert number 789 to string
Check the type of "true" after converting to boolean
*/

// Answer 14:


let converter1 = +"123";

let converter2 = "45.67";
let r2 = parseFloat(converter2);

let converter3 = 789;
let r3 = converter3.toString();

let converter4 = Boolean("true");

console.log(converter4, typeof(converter4));




/*
Question 15: Date and Time Operations
Create a Date object for the current time and:

Extract the year, month (0-11), and day
Get the hours in 24-hour format
Format it as "YYYY-MM-DD"
Create a specific date for December 25, 2024
*/


// Answer 15:



const getData = new Date;
let date1 = getData.getFullYear();
let date2 = getData.getMonth();
let date3 = getData.getDay();
let date4 = getData.getHours();

console.log(date4);
console.log(date1, date2, date3);

let setdata = new Date("2024-12-25");




/*
Question 16: Function - Basic Calculator:
Write a function calculate that takes two numbers and an operator (+, -, *, /)
as parameters and returns the result.
Handle division by zero by returning "Error: Division by zero".
*/


// Answer 16:


let userInput1 = +prompt("Enter A Number!");
let userInput2 = +prompt("Enter Another Number");
let operator = prompt("Enter A opreator (+, -, *, /)");


const add = (a,b) => a + b;
const subt = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => {
    if(userInput1 === 0 || userInput2 === 0){
        console.log("Error: Division by zero");
    }else{
        return a/b;
    }
}


switch(operator){
    case "+":
     console.log(add(userInput1, userInput2));
     break;
      case "-":
        console.log(subt(userInput1, userInput2));
        break;
         case "*":
            console.log(mult(userInput1, userInput2));
            break;
             case "/":
                console.log(div(userInput1, userInput2));
                break;

                default:
                    console.log("Invalid Number OR Opreator!");  
}





/*
Question 17: Function - Local vs Global Variables:
Create a global variable globalCounter = 0.
Write a function incrementCounter that declares a local variable with the same name and increments it,
while also incrementing the global variable. Show the difference after calling the function twice.
*/


// Answer 17:


let globalCounter = 0;
globalCounter++;
const incrementCounter = () => {
    let globalCounter = 0;
    globalCounter++;
    console.log(globalCounter);
}

incrementCounter();
incrementCounter();
console.log(globalCounter);





/*
Question 18: switch Statement - Day of Week:
Write a switch statement that takes a number (0-6)
and returns the corresponding day name (0=Sunday, 1=Monday, etc.).
Include a default case for invalid numbers.
*/


// Answer 18:


let dayOfWeek = +prompt("Enter Number Between 0-6");

switch(dayOfWeek){
    case 0:
        console.log("0 = Sunday");
        break;
        case 1:
            console.log("1 = Monday");
            break;
            case 2:
                console.log("2 = Tuesday");
                break;
                case 3:
                    console.log("3 = Wednesday");
                    break;
                    case 4:
                        console.log("4 = Thusday");
                        break;
                        case 5:
                            console.log("5 = Friday");
                            break;
                            case 6:
                                console.log("6 = Saturday");
                                break;
                                default:
                                    console.log("Invalid Number");
}




/*
Question 19: while Loop - Countdown:
Write a while loop that starts at 10 and counts down to 1,
printing each number. Then print "Blast off!".
Also calculate the factorial of 5 using a while loop.
*/


// Answer 19:


