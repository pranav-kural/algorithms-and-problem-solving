/**
 * Implementation of the merge sort algorithm
 * Example:
 *  Input: [19,0,99,3]
 *  Expected Output: [0,3,19,99]
 */

// import mergeSortedArrays helper function
const { mergeSortedArrays } = require('./merging-arrays');

const mergeSort = (unsortedArr) => {
    // check if input is null or is not of type array
    if (!(Array.isArray(unsortedArr))) return [];

    const recursiveMergeSort = (arr) => {
        // base case, return the array if length is 1 or less
        if (arr.length <= 1) return arr;
        // set the midpoint to split the array
        const mid = Math.floor(arr.length/2);
        // recursive call for left half
        const left = recursiveMergeSort(arr.slice(0,mid));
        // recursive call for right half
        const right = recursiveMergeSort(arr.slice(mid));
        return mergeSortedArrays(left, right);
    }
    
    // make the call to recursive merge sort method and return the resulting sorted array
    return recursiveMergeSort(unsortedArr);
}

// test
// const arrayToSort = [0,3,99,19,4,40,20,63,11,-5,80,99,201];
// console.log("Unsorted array: ", arrayToSort, "| Sorted array: ", mergeSort(arrayToSort));

module.exports = { mergeSort };