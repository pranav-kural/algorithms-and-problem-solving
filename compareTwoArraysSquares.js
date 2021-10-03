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

// PSUEDO
// if arrays are empty or nullish
// OR if size of the arrays is not same
// OR if any of the arrays contain anything other than a number
//  - RETURN false
// if not empty
//  sort both arrays in ascending order
//  loop through the arrays
//      for each iteration, check if a = b^2
//      (where a is element of arr1 & b is element of arr2)
//      if at any point its not equal -
//      - RETURN false
//  If loop completes (i.e.) all values match
//  - RETURN true

// for ease in logging
log = console.log

// getting sample data, size of data by max, starts from min
getSampleArr = (min, max) => {
    let nums = []
    let numsSquares = []
    for (let i = min; i <= max; i++) {
        num = Math.floor(Math.random() * max+1);
        nums.push(num)
        numsSquares.push(num**2)
    }
    return [nums, numsSquares]
}

// retrieve sample data
let [arr1, arr2] = getSampleArr(1, 1000000)

// start timer
console.time("sqaures")

compareArraysForSquares = (arr1, arr2) => {
    // if arguments provided are not array, or empty or their size is different return false
    if (!(Array.isArray(arr1) && Array.isArray(arr2) 
        && arr1.length && arr2.length 
        && arr1.length == arr2.length)) 
        return false;
    
    console.log(arr2[arr2.length-1]);

    // sort numbers in ascending order in each array
    [arr1, arr2] = [arr1.sort((num1, num2) => num1 - num2), arr2.sort((num1, num2) => num1 - num2)]

    // check if each number of arr1, has its sqaure as a value in arr2; 
    // returns false if it fails for any value, otherwise true
    return arr1.every((num, index) => num**2 == arr2[index]); 
}

console.log(compareArraysForSquares(arr1, arr2))

// end timer and log to console
console.timeEnd("sqaures")