// example implementation of binary search
// from: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

/*

Given an array containing all prime numbers between 1 to 100, 
search through the array to verify if a given number is a prime number

*/

// sorted array of prime numbers between 1 and 100
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function isPrime(primes, searchValue) {
    // initialize min and max
    min = 0
    max = primes.length
    // initial guess (integer value); reperesents an index value for primes array
    guess = Math.trunc((min+max)/2)

    // count to keep track of iteration the function took to find solution
    let count = 0;

    while (primes[guess] !== searchValue) {
        if (primes[guess] > searchValue) {
            // if guess was too high, set guess as max for next iteration
            max = guess;
        } else {
            // if guess was too low, set guess as min for next iteration
            min = guess;
        }

        // if difference between min & max is 1, i.e., only two elements left
        // none of which are correct option, break out
        if (max-min === 1) break;

        // re-compute guess
        guess = Math.trunc((min+max)/2)

        // for testing
        console.log(`current - min: ${min} | max: ${max} | guess: ${guess}`);
        count++;
    }

    // display the amount of iterations it took to find solution
    console.log(`Checked for value ${count} times to confirm result.`);

    return (primes[guess] === searchValue);

}

// check
console.log("Is 67 prime?: ", isPrime(primes, 67));