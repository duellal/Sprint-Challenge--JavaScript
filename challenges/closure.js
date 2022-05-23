// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* 
Nested function can access the variable internal, because it is the child scope of the parent scope inside of the function. Since it doesn't have the variable internal, the function then "looks" to the next scope up to see if it has it, and since it does, it can "take" and use that variable inside of its scope. 
*/

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
  let sumation = 0
  for(let i = 1; i <= num; i++){
    sumation += i
  }
  return sumation
}

console.log(sumation(4))
