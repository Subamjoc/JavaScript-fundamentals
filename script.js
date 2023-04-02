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

// const myArray = ["valu1", "value2"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value2


** Short method to ' Array Destructing ' **

1. // const myArray = ["value1", "value2"];

// let [myvar1, myvar2] = myArray;

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value2


2. // const myArray = ["value1", "value2"];

// let [myvar1, myvar2] = myArray;
myvar1 = "value changed"

// console.log("value of myvar1", myvar1); // value of myvar1 value changed

// console.log("value of myvar2", myvar2); // value of myvar2 value2


3. // const myArray = ["value1", "value2", "value3"];

// let [myvar1, myvar2, myvar3] = myArray;

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value2

// console.log("value of myvar3", myvar3); // value of myvar3 value3


4. // const myArray = ["value1"];

// let [myvar1, myvar2, myvar3] = myArray;

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 undefined

// console.log("value of myvar3", myvar3); // value of myvar3 undefined

5. // const myArray = ["value1", "value2", "value3"];

// let [myvar1, , myvar2] = myArray;

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value3

6. // const myArray = ["value1", "value2", "value3", "value4"];

// let [myvar1, myvar2] = myArray;
// let myNewArray = myArray.slice(2);

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value2

// console.log(myNewArray); // > (2) ["value3", "value4"]

7. // const myArray = ["value1", "value2", "value3", "value4"];

// let [myvar1, myvar2, ...myNewArray] = myArray;

// console.log("value of myvar1", myvar1); // value of myvar1 value1

// console.log("value of myvar2", myvar2); // value of myvar2 value2

// console.log(myNewArray); // > (2) ["value3", "value4"]

*/

////////////////////////////////////////////////////

/* OBJECTS 

 Arrays are good but not sufficient. But for real world data arrays not so good, so we use Objects.
 Objects are refrencetype. Objects store key value pairs. Objects don't have index. 
                                    */

////////////////////////////////////////////////////

/*
/// ??? How to Create " Objects " ???

// const person = {name: "Shubham", age: 23}
// console.log(person); // > {name: "Shubham", age: 23}
// console.log(typeof person); // object




*************



/// ??? How to " Access Data from Objects " ???

// console.log(person.name); // Shubham
// console.log(person.age); // 23

**** Store Array in Objects Property (key) Inside **

// const person = {
//     name: "Shubham"
//     age: 23;
//     hobbies: ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
// }
// console.log(persson.hobbies); // > {name: "Shubham", age: 23, hobbies: Array (3)}
// > (3) ["guitar", "sleeping", "listening music"]






************



/// ??? How to " Add Key Value Pair to Objects " ???

const person = {
    name: "Shubham"
    age: 23;
    hobbies: ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
}
console.log(persson.hobbies); // > {name: "Shubham", age: 23, hobbies: Array (3)}
> (3) ["guitar", "sleeping", "listening music"]


// ***Add Key Value Pair to Objects


// peson.gender = "male"
// console.log(person); // > {name: "Shubham", age: 23, hobbies: Array (3), gender: "male"}


// *** Objects with Bracket Notation

console.log(person["name"]); // Shubham
console.log(person["age"]);  // 23

***Add Key Value Pair with Bracket Notaion to Objects


person["gender"] = "male";
console.log(person) // > {name: "Shubham", age: 23, hobbies: Array (3), gender: "male"}


**********


/// ??? Differnce between " Dot Notatio " & " Bracket Notation " ???

1. If you want key name like ( person hobbies) gap between two word than it is show error in output so you write this key name under the Sting ( "person hobbies") and for output you just simply write ( console.log(person["person hobbies"]); ). It's show live in givn below example;-

Example 1:- 

// const person = {
//     name: "Shubham"
//     age: 23;
//     "person hobbies": ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
// }

// console.log(person.["person hobbies"]); // > (3) ["Listening Music", "Drawing Doodles", "Scrolling Internet"]




2. If we have two variable and we want one variable shown under the second variable than we do:- 

const key = "email";
const person = {
    name: "Shubham"
    age: 23;
    "person hobbies": ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
}

// person.key = "subhamjoshi1998@gmail.com"
// console.log(person); // {name: "harshit", age: 22, person hobbies: Array (3), key: "subhamjoshi1998@gmail.com"}


// *** but we want place of 'key' is 'email' so we try another method;***


// person["key"] = "subhamjoshi1998@gmail.com"
// console.log(person); // {name: "harshit", age: 22, person hobbies: Array (3), key: "subhamjoshi1998@gmail.com"}


// *** again in this method we not get  place of 'key' is 'email' so we try another method;***


person[key] = "subhamjoshi1998@gmail.com"
console.log(person); // {name: "harshit", age: 22, person hobbies: Array (3), email: "subhamjoshi1998@gmail.com"}


// *** so in this method we get 'key' replace with 'eamil' ***



**********


/// ???  How to " Iterate Objects " ??

const person = {
    name: "Shubham"
    age: 23;
    "person hobbies": ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
}


**** 1. Iterate Objects by " For in Loop Method" ****

// for(let key in person){
//     console.log(key); // name  age  hobbies
// }
 

*** In this way we not get values of key so we try another way **


// for(let key in person){
//     console.log(person.key) // (3) undefined
// }


*** Also in this way also not get values so we again we try another way to fwt values ***


// for(let key in perrson){
//     console.log(person[key]); // Shubham  23  (3) Array
// }


*** In this way we get values so we use this method to get values in for in loo in objects. ***


******* To Get Key-Value Pairs in For In Loop In Object ****

1. Method by using Tempalte String:-

// for(let key in person){
//     console.log(`${key} : ${person[key]}`); 
//     // name : Shubham
//        age : 23
//        person hobbies : Listening Music,Drwa Doodles,Scrolling Internet
// }


2. 2ND METHOD:-

// for(let key in person){
//     console.log(key, person[key]); 
//     // name  Shubham
//        age  23
//        person hobbies (3) ["Listening Music" ,"Drwa Doodles", "Scrolling Internet"]
// }

                OR
// for(let key in person){
//     console.log(key, " : ", person[key]); 
//     // name : Shubham
//        age : 23
//        person hobbies : (3) ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
// }




**** 2. Iterate Objects by " Object Keys Method" ****


console.log(Object.keys(person)); // (3) ["name", "age", "person hobbies"]
console.log(typeof Object.keys(person))); // object


*** So we get from ' Object.keys ' through an Array and if you want to check this than you check by this way:- ***

const val = Array.isArray((Object.keys(person)));
console.log(val); // true

** So here " true " show that ' Object.keys ' gives us an ' Array '. **


** Now you use " For of Loop " method to "Iterate Objects" get key and values, given below the examples of how you use for of loop method **


for(let key of Objects.keys(person)){
    console.log(key); // name  age  person hobbies
}

*** if you want values than do this;- **


for(let key of Objects.keys(person)){
    console.log(person[key]); // Shubham  23  ["Listening Music", "Drwa Doodles", "Scrolling Internet"]
}

*/

////////////////////////////////////////////////////

/* *** ??? What is " Computed Properties " ??? 

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2"; 

// const obj = {
//     key1 : value1,
//     key2 : value2
// }

// console.log(obj); // {key1: "myvalue1", key2: "myvalue2"}

*** NOW USE COMPUTED PROPERTIES ***
1. method

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj); // {objkey1: "myvalue1", objkey2: "myvalue2"}

2. method

const obj = {};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj); // {objkey1: "myvalue1", objkey2: "myvalue2"}




*/

////////////////////////////////////////////////////

/* *** ??? What is " Sprread Opreator " ??? 




/// *** Spread opreator in Array *** ///

Example 1.

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2]

// console.log(newArray); // (6) [1, 2, 3, 4, 5, 6, 7]

***

Example 2.
const newArray = [...array1, array2]

console.log(newArray); // (4) [1, 2, 3, Array(3)]


***

Example 3.

// const newArray = [...array1, ...array2, 89, 68]

// console.log(newArray); // (6) [1, 2, 3, 4, 5, 6, 7, 89, 68]


***

Example 4.

const newArray = [..."abc", ..."123456789"]

console.log(newArray); // (12) ["a", "b", "c", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

** Note:- If you write integer without string than that will not spread because integers are not Iterable, so output will show an error. **


/// *** Spread opreator in Objeects *** ///

Example 1.

const obj1 = {
    key1: "value1";
    key2: "value2";
   
};
const obj2 = {
    key3: "value3";
    key4: "value4";
};

// const newObject = {...obj1, ...obj2, key69: "value69"}
// console.log(newObject); // {key1: "value1", key2: "value2", key3: "value4", key4: "value4", key69: "value69"}

Example 2.

// const newObject = {..."abc"};
// console.log(newObject); // {0: "a", 1: "b", 2: "c"}

Example 3.

const newObject = {...["item1", "item2"]};
console.log(newObject); // {0: "item1", 1: "item2"}

*/

////////////////////////////////////////////////////

/* *** ??? What is " Object Destructuring " ??? 


// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven"
// };

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong); // led zepplin   stairaway to heaven

*** Above whole process is one shortcut that is called destructuring of the object which will be learn in next example: ****

*** Destructuring ***

const band = {
    bandName: "ledzeppline",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir",
};

let { bandName, famousSong, ...restProps} = band;

console.log(bandName, FamousSong); // led zepplone   stairway to heaven

console.log(restProps); // {year: 1968, anotherFamousSong: "Kashmir"}

*/

////////////////////////////////////////////////////

/* *** ??? How to Use " Object Inside Array " ??? 

** This is very useful in real world application. **

const users = [
    {userId: 1, firstName: 'Shubham', gender: 'male' },
    {userId: 2, firstName: 'Anoop', gender: 'male'},
    {userId: 3, firstName: 'Bhupesh', gender: 'male'},
]
// for(let user of users){
//     console.log(users); // {userId: 1, firstName: 'Shubham', gender: 'male' },
//     {userId: 2, firstName: 'Anoop', gender: 'male'},
//     {userId: 3, firstName: 'Bhupesh', gender: 'male'}
// }

** if you want only key of object than use this way **
for(let user of users){
    comnsole.log(user.firstName); //  Shubham  Anoop  Bhupesh 
}

*/

////////////////////////////////////////////////////

/* *** ??? How to Use " Nested Destructuring " ??? 

const user = [
    {userId: 1, firstName: 'Shubham', gender: 'male' },
    {userId: 2, firstName: 'Anoop', gender: 'male'},
    {userId: 3, firstName: 'Bhupesh', gender: 'male'},,
    {userId: 2, firstName: 'Anoop', gender: 'male'},
    {userId: 3, firstName: 'Bhupesh', gender: 'male'},
]

// const [user1, user2, user3] = user;

// console.log(user1); // {userId: 1, firstName: 'Shubham', gender: 'male' }


** but if you want user1 to get firstName and user3 gender detail so you use nested destrucuring by this way :- **

const[{firstName}, , {gender}] = users;
console.log(firstName); // Shubham
console.log(gender); // male

                    OR

const[{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName); // Shubham
console.log(userId); // 1
console.log(user3gender); // male

*/

////////////////////////////////////////////////////

/* FUNCTIONS 

A function is a block of code that performs a specific task. JavaScript functions are basically used to encapsulate logic, making that code more reusable and easier to understand 
                                    */

////////////////////////////////////////////////////

/*
/// ??? How to Create " Function Decleration" ???

Example 1.

function singHappyBirthday(){
    console.log("happy birthday to you.....")
}


singHappyBirthday(); // happy birthday to you.....

singHappyBirthday(); // happy birthday to you.....

singHappyBirthday(); // happy birthday to you.....

singHappyBirthday(); // happy birthday to you.....


Example 2.

function sumTwoNumbers(number1, number2){
    return number1 + number2;
}

const returnedValue = sumTwoNumbers(4, 5);  
console.log(returnedValue); // 9

const returnedValue = sumTwoNumbers();
console.log(returnedValue); // NaN
console.log(undefined + undefined); // NaN


Example 3.

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

const returnedValue = sumTwoNumbers(4, 5, 6);  
console.log(returnedValue); // 15

const returnedValue = sumTwoNumbers(4,5);
console.log(returnedValue); // NaN
console.log(2 + 3 + undefined); // NaN

Example 4.

// Odd or Even
// Function Name : isEven
// Input : 1 number
// Output : true (if function is even othervise give false)


function isEven(number){
    if(number % 2 === 0){
        return trye;
    }else{
        return false;
    }
}

consol.log(isEven(2)); // true

consol.log(isEven(3)); // false

** YOU WRITE THIS FUNCTION MORE SMALL ALSO IN THIS WAY; **

function isEven(number){
    return number % 2 ==== 0;
}

consol.log(isEven(4)); // true

consol.log(isEven(5)); // false


Example 5.

// function : firstChar
// input : string
// output : firstCharacter

function firstChar(anyString){
    return anystring[0];
}

console.log(firstChar("abc")); // a


Example 6.

// function : findTarget
// input : array, target (number)
// output : index of target if target is present in the array and if you not get the target in the array than output will give -1.


function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1, 3, 8, 90]
const ans = findTarget(myArray, 3)

// console.log(ans); // 90

console.log(ans); // -1
*/

////////////////////////
/*
/// ??? How to Create " Function Expression" ???

Example 1.

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}

singHappyBirthday(); // happy birthday to you ......


Example 2.

const sumThreeNumbers = function(number1 + number2 + number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2, 3, 4);
console.log(ans); // 9


Example 3. 

const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(2)); // true


Example 4.

const firstChar = function(anyString){
    return anyString[0];
}
console.log(firstChar("a, b, c")); // a

*/

///////////////////////////////////////////////////
/*
/// ??? What is " Arrow Function " & How to Create " Arrow Function " ???

***
An arrow function expression is a compact alternative to a traditional function expression.
***


Example 1.

const singHappyBirthday = () => {
    console.log("happy birthday to you ......")
}

singHappyBirthday(); // happy birthday to you .....


Example 2.

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans); // 9

Example 3. 


const isEven = number => {
    return number % 2 === 0;
}

console.log(isEven(4)); // true


                        OR


const isEven = number => number % 2 === 0;

console.log(isEven(4)); // true

*/

///////////////////////////////////////////////////

/*
/// ??? What is " Hoisting " & How to Create " Hoisting " ???

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.


Example 1.

hello(); //  hello world

function hello(){
    console.log("hello world"); 
}


** Only use in Function Decleration Case. **

Example 2. 

console.log(hello); // undefined

var hello = "hello world";

console.log(hello); // hello world

** But if you use let or const than you get as a output Refrence Error. **

*/

///////////////////////////////////////////////////

/*
/// ??? How to Create " Function Inside function " ???

const app = () =>{
    const myFunc = () =>{
        console.log("hello from myFunc");
    }
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }
    const mul = (num1, num2) => num1 * num2;

    console.log("inside app")
    myFunc(); // hello from myFunc
    console.log(addTwo(2,3)); // 5
    console.log(mul(2,3)); // 6
}
app(); // inside app

*/

///////////////////////////////////////////////////

/*
/// ??? What is " Lexical Scope " ???

function myApp(){
    const myVAr = "value1";
    function myFunc(){
        // const myVar = "value59";
        console.log("inside myFunc", myvar);
    }
    console.log(myVar); // value1
    myFunc(); // inside myFunc value1
}
myApp();

*/

///////////////////////////////////////////////////

/*
/// ??? What is " Block Scope vs Function Scope " ???

In javascript the whole document is global scope and all the other functions and variables are contained in this " GLOBAL SCOPE ".

Another is the " LOCAL SCOPE ", variables declared inside the functions are considered to be of the local scope and it is futher divided into FUNCTION SCOPE & BLOCK SCOPE.

FUNCTION SCOPE :- When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

BLOCK SCOPE :-  A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.

*** Note :- // Let & Const are Block Scope. 
            // Var is Function Scope. ****

Example 1.

{
    let firstName = "Shubahm";
    console.log(firstName); // Shubham
}
console.log(firstName); // Refrence Error

                    OR

{
    const lastName = "Joshi"
    console.log(lastName); // Joshi
}
console.log(lastName); // Refrence Error

** Let & Const are Block Scope **

Example 2. 

{
    var firstName = "Shubham"
}
console.log(firstName); // Shubham

Example 3.

function myApp(){
    if(true){
        let firstName = "Shubham";
        console.log(firstName);
    } 

    if (true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp(); // Shubham
        //  Refrence Error

*/

///////////////////////////////////////////////////

/*
/// ??? What is " Default Parameter " ???

Example 1.

function addTwo(a,b){
    return a+b;
}

const ans = addTwo(4, 5);
console.log(ans); // 9


** but if we not pass 2nd element than we get NaN.**


function addTwo(a,b){
    return a+b;
}

const ans = addTwo(4);
console.log(ans); // NaN


** but we want if we not pass 2nd element than automatically get 0 so we earlier do before Es6,**


function addTwo(a,b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}

const ans = addTwo(4);
console.log(ans); // 4 + 0 = 4


*** Now after Coming ES6 we have Default Pararameters so, our work will be easy now same thing we do in d+b;ifferent way... ***

function addTwo(a, b=0){
    return a+b;
}

const ans = addTwo(4);
console.log(ans); // 4


*/

///////////////////////////////////////////////////

/*
/// ??? What is " Rest Parameter " ???

Example 1.


function myFunc(a,b,...c){
    console.log(`a is ${a}`); // a is 3
    console.log(`b is ${b}`); // b is 4
    console.log(`c is ${c}`); // c is 5, 6, 7, 8, 9
}

myFunc(3, 4, 5, 6, 7, 8, 9);


Example 2.

function addAll(...numbers){
    let ttotal = 0;
    for(let number of number){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,6,7,8) 
console.log(ans); // 30

*/

///////////////////////////////////////////////////

/*
/// ??? What is " Parameter Destructuring" ???

Parameter Destructuring is use in Object and also we use mostly time in react.

Example 1.

const person = {
    firstName: "Shubham";
    gender: "male";
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.grnder);
// }

// printDetails(person); // Shubham
//                      //  male

*** Now Destructuring ***

function printDetails({firstName, gender}){
    console.log(obj.firstName);
    console.log(obj.grnder);
}

printDetails(person); // Shubham
                     //  male

*/

///////////////////////////////////////////////////

/*
/// ??? What is " CallBack Function " ???

function myFunc(a){
    console.log(a);
    console.log("hello world");
}

myFunc(1, 2 3); // (3) [1, 2, 3] 
                // hello world

** In CallBack Function **

function myFunc2(name){
    console.log("inside my Func 2");
    console.log(`your name is $(name)`);
}

function myFunc(callback){
    console.log("hello there i am a func and i can ...");
    callback("Shubham");
}

myFunc(myFunc2); // hello there i am a func and i can ...
                //  inside myFunc2
                // your name is Shubham
*/

///////////////////////////////////////////////////

/*
/// ??? What is " Function Returning Function " ???

// function myFunc(){
     //   return "a";
    //    return [1, 2, 3];
    //    return {name: "Shubham", age: 23};
    //    return 1;
}

const ans =   myFunc();
// console.log(ans); // a
// console.log(ans); // (3) [1, 2, 3]
// console.log(ans); // {name: "Shubham", age: 23}
// console.log(ans); // 1

** Now Function Return Function **

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); // hello world

*/

///////////////////////////////////////////////////
//             IMPORTANT ARRAY METHOD
//     1. For Each**
//     2. Map***
//     3. Filter
//     4. Reduce
//     5. Short
//     6. Find
//     7. Every
//     8. Some
//     9. Fill Method
//     10.Splice Method
// /////////////////////////////////////////////////

/*
/// ??? How to Use " For Each " Array Method ???

Example 1.

const numbers = [4, 2, 5, 8];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number}*2`);
}

// myFunc(numbers[0], 0); // index is 0
//                            //  4*2 = 8

// for(let i = 0; i < numbers.length; i++){
//     console.log(i);
//     myFunc(numbers[i], i);
//      // index is 0 number is 4
//      // index is 1 number is 2
//      // index is 2 number is 5
//      // index is 3 number is 8
// }


*** Now this thing we do by For Each Method ***

numbers.forEach(myFunc); // index is 0 number is 4
                         // index is 1 number is 2
                         // index is 2 number is 5
                         // index is 3 number is 8


Example 2.

const numbers = [4, 2, 5, 8];

numbers.forEach(function(number, indedx){
    console.log(`index is ${index} number is ${number}); // index is 0 number is 4
               // index is 1 number is 2
               // index is 2 number is 5
               // index is 3 number is 8 
})


Example 3.

const numbers = [4, 2, 5, 8]

numbers.forEach(function(number){
    console.log(number * 3); // 12
                             // 6
                             // 15
                             // 24
})


Example 4.

const users = [
    {firstName: "Shubham", age: 23},
    {firstName: "Anoop", age: 23},
    {firstName: "Bhupesh", age: 23},
]

users.forEach(function(user){
//     console.log(user.firstName); // Shubham
//                                  // Anoop
//                                  // Bhupesh
// })

*** We do same thing by " For Of Loop " ***

for(let user of users){
    console.log(user.firstName); // Shubham
                                 // Anoop
                                 // Bhupesh
}
*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " MAP " Array Method ???

Example 1.

const numbers = [3, 4, 5, 6, 7]

const square = function(number){
    return number *number;
}

const squareNumber = numbers.map(square); 
console.log(squareNumber); // (5) [9, 16, 25, 36, 49]

Example 2.

const numbers = [3,4,6,1,8];

const squareNumber = number.map((number, index) => {
    return `index: ${index}, ${number * number}`;
});
console.log(squareNumber); // (5) ["index: 0, 9", "index: 1, 16", "index: 2, 36", "index: 3, 1", "index: 4, 64"]


Example 3.

const users = [
    {firstName: "Shubham", age: 23},
    {firstName: "Anoop", age: 23},
    {firstName: "Bhupesh", age: 23},
] 

const userNames = users.map((user) =>{
    return user.firstName;
});

console.log(userNames); // (3) ["Shubham", "Anoop", "Bhupesh"]
*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " FILTER " Array Method ???

Example 1.

const numbers = [1,3,2,6,4,8];

const isEven = function(number){
    return number % 2 ==== 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // (4) [2, 6, 4, 8]


Example 2.

const numbers = [1,3,2,6,4,8];

const isOdd = function(number){
    return number % 2 !==== 0;
}

const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers); // (4) [1, 3]


Example 3.

const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number) =>{
    return number % 2 === 0;
});

console.log(evenNumbers); // (4) [2, 6, 4, 8]

*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " REDUCE " Array Method ???

Example 1.

// aim: sum of all the numbers in array

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
});

console.log(sum); // 15

// acculamator   currentValue      return
//      1              2              3
//      3              3              6
//      6              4              10
//      10             5              15


Example 2.

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
];

userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount); 49000

//  total price         current value       return 
//       0                  {}                12000
//     12000              22000               34000
//     34000              15000               49000

*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " SORT " Array Method ???

// ASCII TABLE

// Character : Ascii Value

//    '0'    :      48
//    '1'    :      49
//    '2'    :      50
//    '3'    :      51
//    '4'    :      52
//    '5'    :      53
//    '6'    :      54
//    '7'    :      55
//    '8'    :      56
//    '9'    :      57


//    ':'    :      58
//    ';'    :      59
//    '<'    :      60
//    '='    :      61
//    '>'    :      62
//    '?'    :      63
//    '@'    :      64


//    'A'    :      65
//    'B'    :      66
//    'C'    :      67
//    'D'    :      68
//    'E'    :      69
//    'F'    :      70
//    'G'    :      71
//    'H'    :      72
//    'I'    :      73
//    'J'    :      74
//    'K'    :      75
//    'L'    :      76
//    'M'    :      77
//    'N'    :      78
//    'O'    :      79
//    'P'    :      80
//    'Q'    :      81
//    'R'    :      82
//    'S'    :      83
//    'T'    :      84
//    'U'    :      85
//    'V'    :      86
//    'W'    :      87
//    'X'    :      88
//    'Y'    :      89
//    'Z'    :      90



//    '['    :      91
//    '\'    :      92
//    ']'    :      93
//    '^'    :      94
//    '_'    :      95
//    '`'    :      96


//    'a'    :      97
//    'b'    :      98
//    'c'    :      99
//    'd'    :      100
//    'e'    :      101
//    'f'    :      102
//    'g'    :      103
//    'h'    :      104
//    'i'    :      105
//    'j'    :      106
//    'k'    :      107
//    'l'    :      108
//    'm'    :      109
//    'n'    :      110
//    'o'    :      111
//    'p'    :      112
//    'q'    :      113
//    'r'    :      114
//    's'    :      115
//    't'    :      116
//    'u'    :      117
//    'v'    :      118
//    'w'    :      119
//    'x'    :      120
//    'y'    :      121
//    'z'    :      122


//    '{'    :      123
//    '/'    :      124
//    '}'    :      125


** What is Sorting.. if we have some number // 5, 9, 410, 1210, 3000 
now we are sorting and expecting this ascending sorting result
    After Sorting we expepecting this result  //   5, 9, 410, 1210, 3000

*** In Sort Method it's change our orignal array change or muted. ***


Example 1.


const numbers = [5, 9, 410, 1210, 3000];

numbers.sort();
console.log(numbers); // (5) [1200, 3000, 400, 5, 9]

Character  Take   Asciii Value
1200         1         49
3000         3         51
400          4         52
5            5         53
9            9         57

** // So, in JavaScript Sorting Method first number take as a string after that sorting according to the Ascii value. **


Example 2.

const userNames = ['Shubham', 'abcd', 'Anoop', 'bhupesh'];

userNames.sort();
console.log(userNames); // (4) ['Anoop', 'Shubham', 'abcd', 'bhupesh']


Example 3.

const numbers = [5, 9, 1200, 410, 3000];

numbers.sort((a, b) =>{
    return a - b;
});

console.log(numbers); (5) [5, 9, 410, 1200, 3000]

*** Note:- " a - b ----> Positive (Gretater than 0) ----> b, a "  ***


Example 4.

const numbers = [5, 9, 1200, 410, 3000];

numbers.sort((a, b) =>{
    return b - a;
});

console.log(numbers); (5) [3000, 1200, 400, 9, 5]

*** Note:- " a - b ----> Negative (Less than 0) ----> a, b " ***


Example 5. // Price Low to High Sorting

const products = [
    {productId: 1, productName: "p1", price: 300 },
    {productId: 2, productName: "p2", price: 3000 },
    {productId: 3, productName: "p3", price: 200 },
    {productId: 4, productName: "p4", price: 8000 },
    {productId: 5, productName: "p5", price: 500 },
]

const lowToHigh = products.slice(0).sort((a, b) =>{
    return a.price - b.price
});

console.log(products); // (5) [{...}, {...}, {...}, {...}, {...}]
                        {productId: 1, productName: "p1", price: 300 }
                        {productId: 2, productName: "p2", price: 3000 }
                        {productId: 3, productName: "p3", price: 200 }
                        {productId: 4, productName: "p4", price: 8000 }
                        {productId: 5, productName: "p5", price: 500 }




console.log(lowToHigh); // (5) [{...}, {...}, {...}, {...}, {...}]
                    > 0   {productId: 3, productName: "p3", price: 200 }
                    > 1   {productId: 1, productName: "p1", price: 300 }
                    > 2   {productId: 5, productName: "p5", price: 500 }
                    > 3   {productId: 2, productName: "p2", price: 3000}
                    > 4   {productId: 4, productName: "p4", price: 8000}
                      length: 5
                      _proto_: Array
*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " FIND " Array Method ???

Example 1.

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string){
    return string.length === 3;
}

// const ans = isLength3("dog");
// console.log(ans); // true

// const ans = isLength3("doggy");
// console.log(ans); // false


const ans = myArray.find(isLength3);
console.log(ans); // cat (** find only 1st occurance)


Example 2.

const users = [
    {userId: 1, userName: "Anoop"},
    {userId: 2, userName: "Bhupesh"},
    {userId: 3, userName: "Devesh"},
    {userId: 4, userName: "Himanshu"},
    {userId: 5, userName: "Shubham"},
];

users.find((user) => user.userId === 3);
console.log(myUser); // {userId: 3, userName: "Devesh"}

*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " EVERY " Array Method ???

Example 1.

const numb3ers = [2,4,6,9,10];

const ans = numbers.every((number) => number % 2 === 0);

// callback function ----> true/false (boolean)

// every method ----> true/false (boolean)

console.log(ans); // false


Example 2.

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
];

const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans); // true

*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " SOME " Array Method ???

Example 1. If any number is even than output will be given true.

const numbers = [3,5,8,9];

const ans = numbers.some((number) => number % 2 === 0);

console.log(ans); // true


Example 2.

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 4, productName: "macbook", price: 150000},
];

const ans = userCart.some((cartItem) => cartItem.price > 100000);

console.log(ans); // true
*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " SOME " Array Method ???

Example 1.

const myArray = new Array(10).fill(0);

console.log(myArray); // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 



Exyample 2. In fill method 
    //   Fill Value,    Stat index,    End Index

const myArray = [1,2,3,4,5,6,7,8];

myArray.fill(0,2,5);
console.log(myArray); // (8) [1, 2, 0, 0, 0, 6, 7, 8]
*/

////////////////////////////////////////////////////

/*
/// ??? How to Use " SPLICE " Array Method ???

// If you want in any any arry anything new insert  or delete than you use SPLICE method of ARRAY.

***  Sequence of doing Splice Method  
    // Start, Delete, Insert // ***

Example 1.

const myArray = ['item1', 'item2', 'item3'];

// Delete

// myArray.splice(1, 1);

// console.log(myArray); // (2) ["item1", "item3"]


// // Insert 

// myArray.splice(1, 0, 'inserted item');

// console.log(myArray); // (4) ["item1", "inserted item", "item2", "item3"]


// insert & Delete simultaneously

const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");

console.log("deleted item", deletedItem); // deleted item > (2) ["item2", "item3"]

console.log(myArray);  (3) ["item1", "inserted item1", "inserted item2"]
*/

////////////////////////////////////////////////////

/*    More Useful Things   */

// 1. Iterables
// 2. Sets
// 3. Maps
// 4. Object Assign
// 5. Optional Chaining

////////////////////////////////////////////////////

/*
/// ??? What is " ITERABLES " ??? And, How it Works ??? ///

** Iterables :- Iterables are those in which we use " For Of Loop ". "String" and "Array" are Iterable. **

Example 1.

const firstName = "Shubham";

for(let char of firstName){
    console.log(char); // S  h  u  b  h  a  m
}


Example 2.

const items = ['item1', 'item2', 'item3'];

for(let item of items){
    console.log(item); //  item1   item2   item3
}


Example 3.

const users = {'key1', 'key2', 'key3'};

for(let item of users){
    console.log(item); // Uncaught TypeError : Users is not iterable.
}

** NOTE :- Iterable are String, Array but Objects are not Itetrable. **

*/

////////////////////////////////////////////////////

/*
/// ??? What is " Array Like Objects " ??? And, How it Works ??? ///

** Array Like Objects :- Array Like Objects are those in which we have " Own Length Property ". Also Array Like Objects Access with Index. "String" are Array Like Objects. **

Example 1.

const firstName = "Shubham";
console.log(firstName.length); // 7
console.log(firstName[2]); // u

*/

////////////////////////////////////////////////////

/*
/// ??? What is " SETS " ??? And, How it Works ??? ///

** Sets :- Array Like Objects are those in which we have " Own Length Property ". Also Array Like Objects Access with Index. "String" are Array Like Objects. **

Example 1.

*/
