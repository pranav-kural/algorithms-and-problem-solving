// example implementation of binary search
// from: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

/*

Given an array containing all numbers between 1 to 100, 
search through the array to verify if a given number is present in the array

*/

// sorted array of numbers between 1 and 100
let nums = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100";
let numsArray = nums.split(" ").map((x) => parseInt(x));

function isPrime(numsArray, searchValue) {
    // initialize min and max
    min = 0
    max = numsArray.length
    // initial guess (integer value); reperesents an index value for  numsArray
    guess = Math.trunc((min+max)/2)

    // count to keep track of iteration the function took to find solution
    let count = 0;

    while (numsArray[guess] !== searchValue) {
        if (numsArray[guess] > searchValue) {
            // if guess was too high, set guess as max for next iteration
            max = guess - 1;
        } else {
            // if guess was too low, set guess as min for next iteration
            min = guess + 1;
        }

        // if difference between min & max is 1, i.e., only two elements left
        // none of which are correct option, break out
        if (max-min < 0) break;

        // re-compute guess
        guess = Math.trunc((min+max)/2)

        // for testing
        console.log(`current - min: ${min} | max: ${max} | guess: ${guess} | val ${numsArray[guess]}`);
        count++;
    }

    // display the amount of iterations it took to find solution
    console.log(`Checked for value ${count} times to confirm result.`);
    
    return (numsArray[guess] === searchValue);

}

// check
console.log("Is 15 in numsArray?: ", isPrime(numsArray, 15));