/* Given two arrays, find out if for each element in one array, 
there is a corresponding sqaure value in the other array */

// Problem understanding and planning

// example INPUTs
// let arr1 = [1,2,1]
// let arr2 = [4,1,1]

// each number of first array, has a corresponding sqaure value in the second array

// example OUTPUTs
// [1,2,3] -> [1,4,9] = true
// [1,2,1] -> [4,1,4] = false
// [1,3]   -> [1,9]   = true

// import methods for obtaining sample data
let sampleData = require('./getSampleData')

// for ease in logging
log = console.log

// retrieve sample data
let [nums, squaresOfNums] = sampleData.getPerfectSamples(1,1000000)
// uncomment below for testing for Imperfect data
// let [nums, squaresOfNums] = getImperfectSamples(1, 1000000)

console.log("Last element of squaresOfNums:", squaresOfNums[squaresOfNums.length-1]);

// start timer
console.time("compareArraysForSquares")

compareArraysForSquares = (nums, squaresOfNums) => {
    // if arguments provided are not array, or empty or their size is different return false
    if (!(Array.isArray(nums) && Array.isArray(squaresOfNums) 
        && nums.length && squaresOfNums.length 
        && nums.length == squaresOfNums.length)) 
        return false;
    
    // declare frequency counters for each of the arrays
    let frequencyCounterNums = {}
    let frequencyCounterSquares = {}

    // get frequency of numbers in nums array
    for (let num of nums) {
        frequencyCounterNums[num] = (frequencyCounterNums[num] || 0) + 1
    }

    // get frequency of numbers in squaresOfNums array
    for (let numSquare of squaresOfNums) {
        frequencyCounterSquares[numSquare] = (frequencyCounterSquares[numSquare] || 0) + 1
    }

    // check for squares and frequency match
    for (let num in frequencyCounterNums) {
        // check if square exists in squaresOfnums
        if (!(num**2 in frequencyCounterSquares)) return false;

        // check if frequencies match
        if (frequencyCounterSquares[num**2] !== frequencyCounterNums[num]) return false;
    }

    // if check for squares passed for all elements
    return true
}

console.log(compareArraysForSquares(nums, squaresOfNums))

// end timer and log to console
console.timeEnd("compareArraysForSquares")