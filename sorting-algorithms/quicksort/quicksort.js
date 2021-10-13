/**
 * Implementation of Quicksort algorithm
 */

// import the method to partition array
const { partitionArrayFromFirst, partitionArrayFromFirstAlt, partitionArrayFromMiddle, partitionArrayFromMiddleAlt } = require('./partition');

/**
 * Quicksort implementation - takes in an array of numbers, a low and a high (optional), and returns the sorted array
 * @param {Array} arr homogeneous array containing numbers
 * @param {integer} low lower end of the array; defaults to 0
 * @param {integer} high higher end of the array; defaults to length of array
 * @returns {Array} sorted array
 */
const quickSort = (arr=[], low=0, high=arr.length-1) => {

    // shallow copy the array so as not to mutate the original array
    const arrayToSort = [...arr];

    const recursiveQuickSort = (arrToSort, low, high) => {
        // console.log("called with: ", arrToSort);
        // if low is lower than higher; implying arr is of length greater than 1
        if (low < high) {
            // partition the array from pivot
            // this will mutate the original array (arr) and return the index of pivot
            const pivotIndex = partitionArrayFromMiddleAlt(arrToSort, low, high);
            // recursive call to the left side of the pivot in the partitioned array
            recursiveQuickSort(arrToSort, low, (pivotIndex > 0) ? pivotIndex-1 : pivotIndex);
            // recursive call to the right side of the pivot in the partitioned array
            recursiveQuickSort(arrToSort, pivotIndex+1, high);
        }
        // return the array
        return arrToSort;
    }

    // sort and return the array
    return recursiveQuickSort(arrayToSort, low, high);
}

module.exports = { quickSort }

// test
const arrayToSort = [10,6,3,8,13,2,20];
//[0,3,99,19,4,40,20,63,11,-5,80,99,201];
console.log("Unsorted array: ", arrayToSort);
console.log("Sorted array: ", quickSort(arrayToSort));