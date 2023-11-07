console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

// Exercise 1 Section

// Exercise 1: Ignore Even

// In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

// 1. Create a `for` loop that evaluates numbers from 1 to 100.
// 2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
// 3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

for (let loopCounter = 1; loopCounter <= 100; loopCounter++)
{
    if (loopCounter % 2 != 0)
    {
        console.log(loopCounter);
    }
}

console.log("EXERCISE 2:\n==========\n");

// Exercise 2 Section
// Exercise 2: FIZZBUZZ
// FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:
// 1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then console.log `'FIZZ'`
//    - If the number is divisible by 5, then console.log `'BUZZ'`
//    - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`


for (let fizzBuzzy = 1; fizzBuzzy <= 100; fizzBuzzy++)
{
    if (fizzBuzzy % 3 && fizzBuzzy % 5)
    {
        console.log("FIZZBUZZ");
    }

    else if (fizzBuzzy % 3)
    {
        console.log("FIZZ");
    }

    else if (fizzBuzzy % 5)
    {
        console.log("BUZZ");
    }
}

console.log("EXERCISE 3:\n==========\n");

console.log("Even Tester:\n==========\n");

let evenTester = 1;

while (evenTester <= 100)
{
    if (evenTester % 2 != 0)
    {
        console.log(evenTester);
    }

    evenTester++;
}

console.log("FIZZBUZZ Exercise:\n==========\n");

fizzCounter = 1;

do
{
    if (fizzCounter % 3 && fizzCounter % 5)
    {
        console.log("FIZZBUZZ");
    }

    else if (fizzCounter % 3)
    {
        console.log("FIZZ");
    }

    else if (fizzCounter % 5)
    {
        console.log("BUZZ");
    }

    fizzCounter++;

}while (fizzCounter <= 100)

console.log("EXERCISE 4:\n==========\n");
// In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".

// 1. Start with the following code:

// ```js
// let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
// ```

// 2. Create a `for` loop that iterates from 0 to n
// 3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
// 4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

let value = Math.round((Math.random() * 500));                      // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);              // creates a random number between 100 and 500

for (i=0; i <= n; i++)
{
    if (i == value)
    {
       console.log("Found Value!");
       break;
    }

    else if (i == n && i != value)
    {
        console.log("Did not find value");
    }
}

console.log("EXERCISE 5:\n==========\n");

// 1. Start with the following code:

// ```js
// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let n = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);
// ```

// 2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and 
// `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let f = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= f; i++)
{
    if (i % fizzDivisor && i % buzzDivisor)
    {
        console.log("FIZZBUZZ");
    }

    else if (i % fizzDivisor)
    {
        console.log("FIZZ");
    }

    else if (i % buzzDivisor)
    {
        console.log("BUZZ");
    }
}









