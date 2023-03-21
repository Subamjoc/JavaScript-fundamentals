/*
// Hello World Program

// console.log can print something on console
// example:-console.log ("hello world"); // hello world
*/

/////////////////////////////////////////////////

/*

//??? What is "Variable" ???

// Variables:- Variables can store some information in form of value, we use that information later, also we can change that information later....

// "There are Two Types of Variables in JavaScript : Local Variable and Global Variable".

// How to "Declare a Variable" :-

    // example:- var firstName = "Shubham";

// Use a Variable:-

    //print- console.log(firstName);

// Change Value :-

    // example:- firstName = "Mohit";
    // print- console.log(firstName);

//Rules for Naming Variables:-

// 1. You cannot Start with Number

    // example:-  var 1value = 2; (invalid), var value2 = 2; (valid)


// 2. You only use  "Underscore _" or "Dollar $""    symbol

    // example:- first_name (valid),   _firstname(valid)
    //  first$name (valid),  $firstname(valid)


// 3. You cannot use Space between Words

    // example:- var first name = "harshit";  (invalid),

// 4. Writing Name

    (i) Snake Case Writing
    // example:-  var first_name = "Harshit"; 
    
    (ii) Camel Case Writing
    // example:-  var firstName = "Harshit"; 

// 5. Convention:-
     Start with Small Letter and use Camel Case Letter Writing generally

    // example:- var firstNmae = "Harshit";
*/

///////////////////////////////////////////////

/*
//??? What is "Keyword"???

Keywords are reserved words that are part of the syntax in the programming.


// Types of Keywords:-   let, var, const

// 1. Let keyword (let):- Let Keyword allows you to declare variables that are 'Limited to the Scope of a Block Statement, or Expression' on which it is Used.

// Decare Variable with Let Keyword:-

Example:-   let firstName = "Harshit";
            firstName = "Mohit";
            console.log(firstName);


// 2. Constant Keyword (const):- The Const Declaration Creates Block-Scoped Constants, much like variables Declared using the Let Keyword. The Value of a Constant can't be Changed through Reassignment.

// Declare Variable with Const Keyword:-

Example:-   const pi = 3.4;
            console.log(pi);


// 3. Var Keyword (var):- Var Keyword, which declares a variable globally, or locally to an entire function regardless of Block Scope.

// Declare Variable with Var Keyword:-

Example:-   var firstName = "Shubham";
            console.log(firstName); // Shubham
*/

/////////////////////////////////////////////////////

/*
// ???What is "String Indexing"???

Example:-
            let firstName = "Shubham"
            S h u b h a m
            0 1 2 3 4 5 6
             console.log(firstName[0]); // S

// length of string
// firstName.length

//last Index : length - 1
/*

/////////////////////////////////////////////////////

/*
//??? What is trim() ???

let firstName = "   Shubham   ";

console.log(firstName.length);
firstName.trim(); // "Shubham"
console.log(newString);
console.log(firstName.length);
*/

/////////////////////////////////////////////////////

/* 
//??? What is toUpperCase() ???

Example:-   let firstName = "Shubham";

            firstName = firstName.toUpperCase();
            console.log(firstName); // SHUBHAM
*/

/////////////////////////////////////////////////////

/*
//??? What is toLowerCase() ???

Example:-   let firstName = "Shubham";

            firstName = firstName.toLowerCase();
            console.log(firstName); // shubham
*/

/////////////////////////////////////////////////////

/*
//??? What is slice ???

let firstName = "Shubham";

// start index 
// end index

let newString = firstName.slice(0,4); //Shub
console.log(newString);
*/

/////////////////////////////////////////////////////

/*
//??? What is Opreator ???

In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example, 2 + 3; // 5. Here + is an operator that performs addition, and 2 and 3 are operands.

// Type of Opreator:-

1. Math (Arithmetic) Operators

                    Operator	Description
                    +	        Addition
                    -	        Subtraction
                    *	        Multiplication
                    **	        Exponentiation (ES6)
                    /	        Division
                    %	        Modulus (Division)
                    ++	        Increment
                    --	        Decrement


Example 1:- const now = 2037;
            const ageJonas = now - 1991;
            const ageSarah = now - 2018;
            console.log(ageJonas, ageSarah);

            console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

Example 2:- const firstName = 'Jonas';
            const lastName = 'Schmedtmann';
            console.log(firstName + ' ' + lastName);

              ////////////////

2. Assignment Operators

            Operator	Example	     Same As
                =	      x = y	      x = y
                +=	      x += y	  x = x + y
                -=	      x -= y	  x = x - y
                *=	      x *= y	  x = x * y
                /=	      x /= y	  x = x / y
                %=	      x %= y	  x = x % y
                **=	      x **= y	  x = x ** y


Example:-   let x = 10 + 5; // 15
            x += 10; // x = x + 10 = 25
            x *= 4; // x = x * 4 = 100
            x++; // x = x + 1
            x--;
            x--;
            console.log(x);

            //////////////////////

3. Comparison Operators

                Operator	    Description
                  ==	           equal to
                  ===	    equal value & equal type
                  !=	           not equal
                  !==	not equal value or not equal type
                  >	               greater than
                  <	               less than
                  >=	     greater than or equal to
                  <=	       less than or equal to
                  ?	             ternary operator


//(A) Equality Opreator (== vs ===)

"== means, It is check only Value not Datatype.
(it is only happen in only js not other programming language,)"

"=== means, It is check Value with Datatype also."

E.g.  For ==

let num1 = "7";
let num2 = 7;
console.log(num1 == num2);  //true

E.g. For === 

console.log(num1 === num2); //false

                 ///////////////////

//(B) Not Equality opreator (!= vs !==)

"!= means, Not Equal to also it is check only Value."

"!== means, Not Equal to also it is check  Value with Datatype."

E.g. For !=

let num1 = 7;
let num2 = 8;

console.log(num1 != num2); // true

                OR 

let num1 = 7;
let num2 = "8";

console.log(num1 != num2); // 

                OR 

let num1 = 7;
let num2 = "7";

console.log(num1 != num2); // false

                OR

let num1 = 7;
let num2 = 7;

console.log(num1 != num2); // false

E.g. For !==

let num1 = 7;
let num2 = 8;

console.log(num1 !== num2); // true

                OR

let num1 = 7;
let num2 = "7";

console.log(num1 != num2); // true

                OR

let num1 = 7;
let num2 = 7;

console.log(num1 != num2); // false

                ////////////////////

//(C) Ternary Opreator

let age = 15;
let drink;

if(age >= 5){
    drink = "coffee";
}else{
    drink = "milk";
}

console.log(drink); // coffee


*** Using Ternary Opreator / Conditional Opreator***


let age = 8;
let drink = age >= 5 ? "coffee" : "milk";

console.log(drink); // coffee

                //////////////////////

4. Logical Opreators

                Operator   	Description
                   &&	    logical and
                   ||	    logical or
                    !	    logical not


//(A) "And &&" "Or ||"" Opreator:-

let firstName = "Harshit";
let age = 22;

// if(firstName[0] === "H"){
    // console.log("your name with starts H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

        && Opreator (in and opreator when both condition are true then show the value) 

// if(firstName[0] === "H" && age > 18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else"); // inseide else
// }

         || Opreator (in or opreator if one value is true then output is show)

// if(firstName[0] === "H" || age > 18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }
/*

/////////////////////////////////////////////////////

/*
//??? What is "Operator Precedence" ???

Example:-   const now = 2037;
            const ageJonas = now - 1991;
            const ageSarah = now - 2018;

            console.log(now - 1991 > now - 2018);

            let x, y;
            x = y = 25 - 10 - 5; // x = y = 10, x = 10
            console.log(x, y);

            const averageAge = (ageJonas + ageSarah) / 2;
            console.log(ageJonas, ageSarah, averageAge);
*/

///////////////////////////////////////////////////

/*
//??? Data Types (Primitive Data Types) ???

// 1. string "harshit"

let firstName = "Harshit";
console.log(typeof firstName); // string

            //////////////

// 2. Number 2, 4, 5.6

let age = 24;
console.log(typeof age);  // age

            //////////////

// 3. Booleans
   
Bolleans are two values, i.e. True, False
eg:-

let num1 = 5;
let num2 = 7;

console.log(num1 > num2); //false

        // Comparision Opreator ( >, <, =, >=, =<)

            /////////////////

// 4. Undefined

let firstName;
console.log(type of firstName); // undefined

            /////////////////

// 5. Null

let myVariable = null;
console.log(myVariable); //null
  
-----if we do 
console.log(typeof null); // object
 that is //bug or error in javascript------

            //////////////////

// 6. BigInt  
// i.e. new javascript primitive data type  
 

let myNumber = 123;
console.log(myNumber); //123

---//max number---
console.log(Number.MAX_SAFE_INTENGER);

---//Use BigInt---
let muNumber = BigInt(1234567890231456788935);
console.log(myNumber); //1234567890231456788935

                    OR  
let myNumber = BigInt(12);
console.log(myNumber); //12

                    OR
let samemyNumber = 123n; // put 'n' in last to make bigint that is another method
console.log(sameMyNumber); //123n

// you also any airthamatic opreation with bigint i.e.
console.log(myNumber + sameMyNumber); //135n

            ////////////////

// 7. Symbol
*/

/////////////////////////////////////////////////////

/*
//??? How to "Convert Number to String" ???

Example:-   age = age + "";
            console.log(typeofage + ""); // "22"
         
            //OR

            let age = "18";
            age = String(age);
            console.log(typeof age);

            /////////////////////

//??? How to Convert "String to Number" ???

Example:-   let myStr = +"34";
            console.log(typeof myStr);
         
            //OR

            let age = "18";
            age = Number(age);
            console.log(typeof age);
*/

/////////////////////////////////////////////////////

/*
// ??? What is "String Concatenation (Concatenation mean Add)"

Example 1:- let string1 = "shubham";
            let string2 = "joshi";

            let fullName = string1 + " " + string2;
            console.log(fullName); // shubham joshi


Example 2:- let string3 = "17";
            let string4 = "10";

            let newString = string3 + string4; 
            console.log(newString); //1710

        // Convert "String to Number" 

Example:-   let newString = +string3 + +string4; 
            console.log(newString); //27
*/

/////////////////////////////////////////////////////

/*
//??? What is "Template String" ???

            let age = 22;
            let firstName = "Shubham";

 // " My name is Shubham and my age is 23"

            let aboutMe = "My name is " + firstName + " and my age is " + age";
            console.log(aboutMe);

                   // OR "Template String"

Example:-   let aboutMe = `My name is ${firstName}  
            and my age is ${age}`;

            console.log(aboutMe); // My name is shubham and my age is 23 
*/

/////////////////////////////////////////////////////

/*
/// ??? What is " if" - "else" condition...(Taking Decision)

E.g.1:-     let age = 18;

            if(age >= 18){
                console.log("Citizens can Vote"); // Citizens can Vote
            } else{
                console.log("Citizens can not Vote")
            }

                    OR
                    
            let age = 17;

            if(age >= 18){
                console.log("Citizens can Vote"); 
            } else{
                console.log("Citizens can not Vote") // Citizens can  not Vote
            }


E.g.2:-     let num = 14;

            if(num%2 ==== 0){
                console.log("even");  // even
            }else{
                console.log("odd");
            }
*/

/////////////////////////////////////////////////////

/*
/// ??? What is " truthy and Falsy Values" ???

** Falsy Values are :-

// 1. false

let firstName = false;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");  //firstName is kinda empty
}

                    ///////////

 // 2. ""  (Empty string)

let firstName = "";

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");  //firstName is kinda empty
}

                    //////////

 // 3. null

 let firstName = null;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");  //firstName is kinda empty
}

                    ///////////

 // 4. Undefined

 let firstName;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");  //firstName is kinda empty
}

                    ////////////

 // 5. 0 (Zero)

 let firstName = 0;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");  //firstName is kinda empty
}

                    ///////////////

** Truthy Values are :-

// 1. "abc"
// 2/ 1, -1 

E.g. :- 

let firstName = harshit

if(firstName){
    console.log(firstName); // harshit
}else{
    console.log("firstName is kinda empty"); 
}
*/

/////////////////////////////////////////////////////

/*
/// ??? What is "Nested if else" ???

// Example 1:-

    // Try to explain this concept to making simple number guess Game 

// winning number = 19
//if guess number is 19 then output will be your guess is right
//if guess number is 17 then output will be number is too low
//if guess number is 20 than output will be number is too high


                let winningNumber = 19;
                let userGuess = +prompt("Guess a Number");

                if(userGuess === winningNumber){
                    console.log("Your guess is right!!");
                }else{
                    if(userGuess < winningNumber){
                        console.log("too low !!!");
                    }else{
                        console.log?("too high !!!")
                    }
                }


// Example 2

// if
// else if
// else if
// else if
// else

                let tempInDegree = 15;

                if(tempInDegree < 0){
                    console.log("Extremely cold outside");
                }else if(tempInDegree < 16){
                    console.log("It is cold outside");
                }else if(tempInDegree < 25){
                    console.log("Wheather is okay");
                }else if(tempInDegree < 35){
                    console.log("Lets go for swim");
                }else if(tempInDegree < 45){
                    console.log("Turn on AC");
                }else{
                    console.log("Too hot!!");
                }
*/

////////////////////////////////////////////////////

/*
/// ??? What is "Switch Statement" ???

                let day = 0;

                if(day === 0){
                    console.log("Sunday");
                }else if(day === 1){
                    console.log("Monday");
                }else if(day === 2){
                    console.log("Tueday");
                }else if(day === 3){
                    console.log("Wednesday");
                }else if(day  === 4){
                    console.log("Thrusday");
                }else if(day === 5){
                    console.log("Friday");
                }else if(day === 6){
                    console.log("Saturday")
                }else{
                    console.log("Invalid Day");
                }


        // By Switch Statement Method 

                let day = 2;

                switch(day){
                    case 0:
                        console.log("Sunday");
                    case 1:
                        console.log("Monday");
                    case 2:
                        console.log("Tuesday");
                    case 3:
                        console.log("Wednesday");
                    case 4:
                        console.log("Thrusday");
                    case 5:
                        console.log("Friday");
                    case 6:
                        console.log("Saturday");
                    deafult:
                        console.log("Invalid Day");
                }          
        //  Output will be  //  Tuesday
                            //  Wednesday
                            //  Thrusday
                            //  Friday
                            //  Saturday
                            //  Invalid Day

            // But if we want which day we select then in output time only that day will be show then we add "break"


                let day = 2;

                switch(day){
                    case 0:
                        console.log("Sunday");
                        break;
                    case 1:
                        console.log("Monday");
                        break;
                    case 2:
                        console.log("Tuesday");
                        break;
                    case 3:
                        console.log("Wednesday");
                        break;
                    case 4:
                        console.log("Thrusday");
                        break;
                    case 5:
                        console.log("Friday");
                        break;
                    case 6:
                        console.log("Saturday");
                        break;
                    deafult:
                        console.log("Invalid Day");
                }          
                    // Output wiil be //  Tuesday
*/

////////////////////////////////////////////////////

/*
/// ??? What is "While Loop" ???

//If we want print number  0 to 9, then we do
// console.log(0); //0
// console.log(1); //1
// console.log(2); //2
// console.log(3); //3
// console.log(4); //4
// ...
// console.log(9); //9

// But that method is not a good practice so, we try another method...
// let i = 0;
// console.log(i); //0
// i++;
// console.log(i); //1
// i++;
// console.log(i); //2
// i++;
// console.log(i); //3
// i++;
// console.log(i); //4
// ...
// i++;
// console.log(i); //9

// This practice is also not a good practice. Because in JavaScript code repeat is not a good thing...
// dry don't repeat yourself....so we use "While Loop"...

            let i = 0; // 1 2 3 4.........9...10

            while(i <= 9){
                console.log(i); //0  1  2  3  4.....9
                i++;
            }
            console.log(`Current value of i is ${i}`); //Current value of i is 10


Example:-   let num = 100;
            let total = 0; // 1 + 2 + 3 + 4  + ... + 100
            let i = 0;

            while(i <= 100){
                total = total +i;
                i++;
            }

            console.log(total); //5050

            OR By Mathematical Formula

            let total = (num*(num+1))/2;
            console.log(total); //5050
*/

////////////////////////////////////////////////////

/*
//??? What is "For loop" ???

// intro to for loop
// print 0 to 9

for(let i = 0; i<=9; i++){
    console.log(i); //0 1 2 3 4 5 6 7 8 9
}

//Example of "for loop" :-

            let total = 0;

            let num = 10;

            for(let i = 1; i <= num; i++){
                total = total + i;
            }
            console.log(total);
*/

////////////////////////////////////////////////////

/*
//??? What is "Break Keywork" or "Continue Keyword"

// Break Keywork

for(let i = 1; i <= 10; i++){
    if(i === 4){
        break;
    }
    console.log(i); // 1 2 3
}
console.log("hello there"); // hello there


// Continue Keyword

for(let i = 1; i <= 10; i++){
    if(i === 4){
        continue;
    }
    console.log(i); // 1 2 3 5 6 7 8 9 10
}
console.log("hello there"); // hello there
*/

////////////////////////////////////////////////////

/*
//??? What is "Do While Loop" ???

// In While Loop

let i = 0;
while(i <= 9){
    console.log(i); // 0 1 2 3 4 5 6 7 8 9  {Check first condition after show output}
    i++;
}


// In Do While Loop

let i = 0;
while(i <= 9){
    console.log(i);
    i++;
}

do{
    console.log(i); // 10   {IN Do while Loop any how show first output after that check condition}
    i++;
}while(i <= 9);
*/

////////////////////////////////////////////////////
/*
//??? What is "Intro to Arrays" ???

// Intro to Arrays:- 

Ordered Collection of Items/ Elements. In Array we store every type of DataTypes like String, NUmber, Null... Arrays are Muteable. Array is a "Refrence Type"(All Refrence Type are Object in JavaScript).

Example 1:- let fruits = ["apple", "mango", 
            "grapes"];

            console.log(fruits); // ["apple", "mango", "grapes"]

            console.log(fruits[0]); // [apple]
            console.log(fruits[1]); // [mango]
            console.log(fruits[2]); // [grapes]

            // Where 0, 1, 2 are Index No. 


Example 2:- let mixed = [1, 2, 2.3, "string", null, 
            undefined];

            console.log(mixed); // [1, 2, 2.3, "string", null, undefined]


Example 3:- let fruits = ["apple", "mango", 
            "grapes"];

            console.log(fruits); // ["apple", "mango", "banana"]

            fruits[1] = "banana";
            console.log =(fruits); // ["apple", "banana", "grapes"];

            console.log(type of fruits); // object

            console.log(Array.isArray(fruits)); // true

            let obj = {}; // object literal

            console.log(type of obj); // object
            console.log(Array.isArray(obj)); // false

            ///////////////////////

// Methods Of Arrays:-

1. Array Push:- Adding Elements from Last

    let fruits = ["apple", "mango", "grapes"];
    console.log(fruits); // ["apple"' "mango", "grapes"]

    // push

    fruits.push("banana");
    consople.log(fruits); // ["apple", "mango", "grapes", "banana"];

                    ////////

2. Array Pop:- Removing Elements from Last

    let fruits = ["apple", "mango", "grapes"];
    console.log(fruits); // ["apple"' "mango", "grapes"]

    // pop

    fruits.pop();
    console.log(fruits); // ["apple", "mango"]

                    /////////
                    
3. Array Unshift:- Adding Elements from Start
    
    let fruits = ["apple", "mango", "grapes"];
    console.log(fruits); // ["apple"' "mango", "grapes"]

    // Unshift

    fruits.unshift("banana");
    console.log(fruits); // ["banana, "apple"' "mango", "grapes"]

                    ////////////

4. Array Shift:- REmving Elements from Start

    let fruits = ["apple", "mango", "grapes"];
    console.log(fruits); // ["apple"' "mango", "grapes"]

    // Shift

    let removedFruit = fruits.unshift();
    console.log(fruits); // ["mango", "grapes"]
    console.log("removed fruit is", removedFruit); // removed fruit is apple

            //////////////////////////

Note:- Push & Pop are fast in comparison to Shift & Unshift.  
*/

////////////////////////////////////////////////////

/*
/// ??? What is " Primitive vs Reference Data" Type ???


/// Primitive Data Type:-  These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods. Primitive data types are (Number, String, Boolean, Undefined, Symbol, Null and BigInt.)

Example:- 

let num1 = 6;
let num2 = num1;

console.log("value is num1 is", num1); // value is num1 is 6

console.log("value is num2 is", num2); // value is num2 is 6
             
/// But if we increment num1, than

num1++;
console.log("value is num1 is", num1); // value is num1 is 7

console.log("value is num2 is", num2); // value is num2 is 6


**Note**  Primitive DataType are store in 'Stack'.


/// Refrence Data Type :- Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.

Example:- // array

let array1 = ["item1", "item2"];
let array2 = array1;

console.log("array1", array1); // array1 > (2) ["item1", "item2"]

console.log("array2", array2); // array2 > (2) ["item1", "item2"]

**Note**  Refrence DataType are store in 'Heap', but all items pointer make in 'Stack' one by one.

NOW PUSHING new item3 in array1 than,

array1.push("item3");

console.log("array1", array1); // array1 > (3) ["item1", "item2", "item3"]

console.log("array2", array2); // array2 > (3) ["item1", "item2", "item3"]

*/

////////////////////////////////////////////////////

/*
/// ??? How to Clone Array' ???

let array1 = ["item1", "item2"];
let array2 = array1;

console.log(array1 ==== array2); // true

 ** Now making differet array

let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];

array1.push("item3");

console.log(array1 ==== array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (2) ["item1", "item2"]

IT IS NOT A GOOD METHOD TO CLONE ANY ARRAY BECAUSE IF YOU HAVE THOUSANDS OF ITEMS THAN YOU PUSH ONE BY ONE SO IT'S VERY LENGTHY WORK SO, WE DO DIFFERENT METHODs TO CLONE ANY ARRAY.

1.) Clone any Array by Slice method:-

let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (2) ["item1", "item2"]

2.) Clone any Array by Concatenate method:-

let array1 = ["item1", "item2"];
let array2 = [].concate(array1);
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (2) ["item1", "item2"]


3.) Clone any Array by Spread Opreator method:-


let array1 = ["item1", "item2"];
let array2 = [...array1];
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (2) ["item1", "item2"]



****** How to Concatenate Two Arrays ********
1.Method


let array1 = ["item1", "item2"];
let array2 = array1.slice(0).concat(["item3", "item4"]);
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (4) ["item1", "item2", "item3", "item4"]


2. Method

let array1 = ["item1", "item2"];
let array2 = [].concate(array1, ["item3", "itmem4"]);
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (4) ["item1", "item2", "item3", "item4"]


3. Method


let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", "item4"];
array1.push("item3");

console.log(array1 === array2); // false
console.log(array1) // > (3) ["item1", "item2", "item3"]
console.log(array2) // > (4) ["item1", "item2", "item3", "item4"]

*/

////////////////////////////////////////////////////

///////// *****  Loop in Array **** ////////////////

/*
/// ??? How to Use " 'for' loop in Array " ???


let fruits = ["apple", "mango", "grapes", "banana"];

//  for(let i=0; i<=9;i++){
//     console.log(i); // 0, 1, 2, 3, 4, ..., 9
// }

// console.log(fruits.length); // 4
// console.log(fruits[2]); // grapes
// console.log(fruits[frruits.length-2]); // grapes

// for(let i=0; i<=fruits.length-1; i++){
//     console.log(i); // 0  1  2  3  
// }

but if we do 

// for(let i=0; i < fruits.length; i++){
//     console.log(i); // 0  1  2  3  
// }

// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i]); // apple  mango  grapes  banana  
// }

// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase()); // APPLE  MANGO  GRAPES  BANANA  
// }


let fruits2 = [];
for(let = 0; i < fruits.length; i++){
    fruits.push(fruits[i].toUpperCase());
}

console.log(fruits2); // > (4) ["APPLE", "MANGO", "GRAPES", "BANANA"]
*/

/*
/// ??? How to Use " 'const' for creating Arraay " ???

    // heap memory ["apple", "mango"] 0x11 

const fruits = ["apple", "mango"];  // address 0x11
fruits.push("banana");
console.log(fruits); // > (3) ["apple", "mango", "banana"]

** if we try to change this array with const**

const fruits = ["apple", "mango"];  // address 0x11
fruits = ["grapes", "mango"];
fruits.push("banana");
console.log(fruits); // error


*/

/*
/// ??? How to Use " 'while' loop in Array " ???

const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];

// let i = 0; 
// while(i < fruits.length){
//     console.log(fruits[i]); // apple  mango  grapes
//     I++;
// }

// let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i].toUpeerCase()); // APPLE MANGO GRAPES
//     i++;
// }

let i = 0;
while(i < fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits[i]); // >  (3) ["APPLE", "MANGO", "GRAPES"]

*/

/*
/// ??? How to Use " 'for of' loop in Array " ???


const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];


// for(let fruit of fruits){
//     console.log(fruit); // apple  mango  grapes
// }


// for(let fruit of fruits){
//     console.log(fruit.toUpperCase()); // APPLE MANGO GRAPES
// }


for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase()); // APPLE MANGO GRAPES
}

console.log(fruits2); // > (3) ["APPLE", "MANGO", "GRAPES"]

** jitni length hogi utni bar loop chlti rhegi **

*/

/*
/// ??? How to Use " 'for in' loop in Array " ???


const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];

// for(let index in fruits){
//     console.log(index); // 0  1  2  
// }



// for(let index in fruits){
//     console.log(fruits[index]); // apple  mango  grapes
// }

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2); // > (3) ["APPLE", "MANGO", "GRAPES"]

**** For Array we use mostly "for of loop", "for loop" ****

*/

////////////////////////////////////////////////////

/*
/// ??? What is " Array Destructing " ???

 

*/
