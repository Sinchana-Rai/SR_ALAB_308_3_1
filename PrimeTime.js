// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. 
// For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. 
// Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult,
// but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5.
//  Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 
//  Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.


let n = 9; // Should print the next prime number
let n2 = n + 1
isPrime = false

while (true) {
  isPrime = true;


  for (let j = 2; j <= Math.sqrt(n2); j++) {
    if (n2 % j === 0) {
      isPrime = false;
      break; // Exit the loop if it's not prime
    }
  }

  if (isPrime) {
    console.log(n2); // Print the prime number
    break;
  }
n2++
}


