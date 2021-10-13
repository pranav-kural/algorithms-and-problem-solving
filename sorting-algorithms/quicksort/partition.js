/**
 * Implementation of helper function for partitioning the array to facilitate Quicksort
 */

/**
 * Given an array of numbers, low and high end; takes first element of the array as pivot,
 * and mutates the array by moving all values lower than pivot to the left of pivot, 
 * and all values higher than pivot to the right of pivot.
 * @param {array} arr Array containing numbers
 * @param {integer} low lower end of the array
 * @param {integer} high higher end of the array
 * @returns integer value representing the index of the pivot
 */
const partitionArrayFromFirst = (arr=[], low=0, high=arr.length) => {
    // check if input is null or is not of type array
    if (!(Array.isArray(arr)) || arr == []) return [];
    if (arr.length === 1) return arr;

    // set first element as pivot
    let pivotIndex = 0;
    // set pointers
    let i=low+1,j=high-1;

    // loop until point i is less than point j
    while (i < j) {
        while (arr[i] <= arr[pivotIndex]) {
            i++;
        }
        while (arr[j] > arr[pivotIndex]) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else {
            [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];
            pivotIndex = j;
        }
    }
    // arr has been mutated by this point; return just the index of pivot
    return pivotIndex;
}

/**
 * Given an array of numbers, low and high end; takes first element of the array as pivot,
 * and mutates the array by moving all values lower than pivot to the left of pivot, 
 * and all values higher than pivot to the right of pivot.
 * @param {array} arr Array containing numbers
 * @param {integer} low lower end of the array
 * @param {integer} high higher end of the array
 * @returns integer value representing the index of the pivot
 */
 const partitionArrayFromMiddleAlt = (arr=[], low=0, high=arr.length) => {
    // check if input is null or is not of type array
    if (!(Array.isArray(arr)) || arr == []) return [];
    if (arr.length === 1) return arr;

    // set first element as pivot
    let pivotIndex = 0;
    let midOfArray = Math.floor(arr.length/2);
    // swap middle and first element, to make middle element the pivot
    // why? - in case array is already fairly sorted, high probability the middle element will be median
    // and best case of quicksort is when median is taken as pivot
    [arr[pivotIndex], arr[midOfArray]] = [arr[midOfArray], arr[pivotIndex]];
    // set pointers
    let i=low+1,j=high-1;

    // loop until point i is less than point j
    while (i < j) {
        while (arr[i] <= arr[pivotIndex]) {
            i++;
        }
        while (arr[j] > arr[pivotIndex]) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else {
            [arr[pivotIndex], arr[j]] = [arr[j], arr[pivotIndex]];
            pivotIndex = j;
        }
    }
    // arr has been mutated by this point; return just the index of pivot
    return pivotIndex;
}

/**
 * Given an array of numbers, low and high end; takes a pivot in the middle of the array,
 * and mutates the array by moving all values lower than pivot to the left of pivot, 
 * and all values higher than pivot to the right of pivot.
 * @param {array} arr Array containing numbers
 * @param {integer} low lower end of the array
 * @param {integer} high higher end of the array
 * @returns integer value representing the index of the pivot
 */
const partitionArrayFromMiddle = (arr=[], low=0, high=arr.length) => {
    // check if input is null or is not of type array
    if (!(Array.isArray(arr)) || arr == []) return [];
    if (arr.length === 1) return arr;

    // select the middle element as pivot
    let pivotIndex = Math.floor(arr.length/2);

    /*
    setup two pointers i and j
    Operation: 
        pointer i will move from left to right, from first element in array, towards the pivot
        pointer j will move from right to left, from last element in array, towards the pivot
        pointer i will check for values larger than pivot
        pointer j will check for values lesser than pivot
        at end of each iteration, we swap values at i and j, i.e., move value greater than pivot to the right of pivot,
        and move value lesser than pivot to the left of pivot
        we repeat the steps until i crosses j, i.e., all values checked on both sides of pivot
    */
    let i=low,j=high-1;

    // loop until point i is less than point j
    while (i < j) {
        while (arr[i] <= arr[pivotIndex] && i <= pivotIndex) {
            i++;
        }
        while (arr[j] > arr[pivotIndex]) {
            j--;
        }
        if (i <= j) {
            if (i != j) {
                if (i > pivotIndex) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                    pivotIndex = i;
                } else if (j < pivotIndex) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    [arr[j], arr[pivotIndex]] = [arr[pivotIndex], arr[j]];
                    pivotIndex = j;
                } else if (i === pivotIndex) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    pivotIndex = j;
                } else if (j === pivotIndex) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    pivotIndex = i;
                } else {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            } else if (i === j) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex = i;
            }
        }
    }

    // arr has been mutated by this point; return just the index of pivot
    return pivotIndex;
}



let arr = [10,6,3,8,13,2,20];
console.log("Pivot (by middle)", arr[partitionArrayFromMiddleAlt(arr)]); // [2,6,3,8,13,10,20];
console.log("Pivot (by first)", arr[partitionArrayFromFirst(arr)]); // [2,6,3,8,13,10,20];
console.log((arr));