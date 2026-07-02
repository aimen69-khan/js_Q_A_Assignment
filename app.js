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


