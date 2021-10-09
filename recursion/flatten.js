// recursive method to flatten an array of arrays
// EXAMPLE
// INPUT: [1, [2, [3, 4], [[5]]]]
// Expected OUTPUT: [1,2,3,4,5]

/*

Problem: flatten an array containing nested arrays

Requirements: an array

Recursive plan:

- base case
    - depth of array is 1, then return array
- recursive call
    - if depth of array not 1, get the first element and add to it result of recursive call on rest of array

*/

// sample input array
let sampleInputArray = [1, [2, [3, 4], [[5]]]];

// start timer
console.time("recursive-flatten");

function flatten(arr) {
    // initialize array to store values
    let flattenedArray = []
    // loop through each element of the array
    for (element of arr) {
        if (Array.isArray(element)) {
            // if element if an array, make the recursive call
            flattenedArray.push(...flatten(element))
        } else {
            // base case
            flattenedArray.push(element)
        }
    }
    // return the flattened array
    return flattenedArray
}

console.log("Recursive solution: ", flatten(sampleInputArray));

// time end for recursive method
console.timeEnd("recursive-flatten");

// time start for non-recursive solution
console.time("non-recursive-flatten")

// non-recursive solution just for example
function flattenNonRecursive(arr) {
    return String(arr).split(',')
}

console.log("Non-recursive solution: ", flattenNonRecursive(sampleInputArray));

// time end for non-recursive solution
console.timeEnd("non-recursive-flatten")