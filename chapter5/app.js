//  Question  start 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
// Question 1 end 


//  QUESTION start 2 

// Subtraction, Multiplication, Division & Modulus

var num1 = 3;
var num2 = 5;

// Subtraction
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

// Multiplication
var multiply = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");

// Division
var divide = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br>");

// Modulus (Remainder)
var mod = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");

// Question 2 end 

//  QUESTION start 3

// Mathematic Expressions Step-by-Step

// a. Declare a variable
var myVar;

// b. Show value after declaration
document.write("Value after variable declaration is " + myVar + "<br>");

// c. Initialize the variable with 5
myVar = 5;

// d. Show initial value
document.write("Initial value: " + myVar + "<br>");

// e. Increment the variable
myVar++;

// f. Show value after increment
document.write("Value after increment is: " + myVar + "<br>");

// g. Add 7 to the variable
myVar = myVar + 7;

// h. Show value after addition
document.write("Value after addition is: " + myVar + "<br>");

// i. Decrement the variable
myVar--;

// j. Show value after decrement
document.write("Value after decrement is: " + myVar + "<br>");

// k & l. Show the remainder after dividing by 3
var remainder = myVar % 3;
document.write("The remainder is : " + remainder + "<br>");

// Question 3 end 

//  Question start 4


var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR" + "<br>" );

// Question 4 end 

//  QUESTION 5 start (Multiplication Table)


var num = 4;

document.write("Table of " + num + "<br>");
document.write(num + "x1=" + (num * 1) + "<br>");
document.write(num + "x2=" + (num * 2) + "<br>");
document.write(num + "x3=" + (num * 3) + "<br>");
document.write(num + "x4=" + (num * 4) + "<br>");
document.write(num + "x5=" + (num * 5) + "<br>");
document.write(num + "x6=" + (num * 6) + "<br>");
document.write(num + "x7=" + (num * 7) + "<br>");
document.write(num + "x8=" + (num * 8) + "<br>");
document.write(num + "x9=" + (num * 9) + "<br>");
document.write(num + "x10=" + (num * 10) + "<br><br>");

//  QUESTION 5 end

// QUESTION 6 start (Temperature Converter)


// a. Store a Celsius temperature into a variable
var celsius = 25;

// b. Convert it to Fahrenheit: °F = (°C x 9 / 5) + 32
var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "<sup>o</sup>C is " + fahrenheitFromC + "<sup>o</sup>F<br>");

// c. Store a Fahrenheit temperature into a variable
var fahrenheit = 70;

// d. Convert it to Celsius: °C = (°F - 32) x 5 / 9
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "<sup>o</sup>F is " + celsiusFromF + "<sup>o</sup>C");

//  QUESTION 6 end


// QUESTION 7 start(Shopping Cart)

// Variables definition
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

// Total calculation
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display receipt on browser
document.write("<h1>Shopping Cart</h1><br><br>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);
//  QUESTION 7 end


//  QUESTION 8 start (Marks Sheet)


// Variables definition
var totalMarks = 980;
var marksObtained = 804;

// Calculate percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display result on browser
document.write("<h1>Marks Sheet</h1><br><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

//  QUESTION 8 end

//  QUESTION 9 start (Currency in PKR)


// Single expression calculation:
// 1 US Dollar = 104.80 PKR
// 1 Saudi Riyal = 28 PKR
var totalPKR = (10 * 104.80) + (25 * 28);

// Display result on browser
document.write("<h1>Currency in PKR</h1><br><br>");
document.write("Total Currency in PKR: " + totalPKR);

//  QUESTION 9 end


//  QUESTION 10 start (Arithmetic Expression)

var num = 10;

// Perform all calculations in a single expression:
// (Add 5, Multiply by 10, Divide by 2)
var result = ((num + 5) * 10) / 2;

//  QUESTION 10 end

//  QUESTION 11 start (The Age Calculator)

var currentYear = 2016;
var birthYear = 1992;

// Calculate age
var age = currentYear - birthYear;

// Display result on browser
document.write("<h1>Age Calculator</h1><br><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age);

//  QUESTION 11 end




//  QUESTION 12 start(The Geometrizer)


var radius = 20;
var pi = 3.142;

// Formulas:
// Circumference = 2 * pi * r
// Area = pi * r^2
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1><br><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");


//  QUESTION 12 end

//  QUESTION 13 start  (The Lifetime Supply Calculator)


// Variables definition
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

// Total snacks calculation (as per assignment solution formula)
var totalNeeded = (maxAge - currentAge) * amountPerDay;

// Display result on browser
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);


//  QUESTION 13 end
