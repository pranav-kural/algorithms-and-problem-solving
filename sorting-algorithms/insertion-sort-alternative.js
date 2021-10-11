/**
 * Implementation of Insertion sorting algorithm - alternative approach
 */

const insertionSort = (arrayToSort) => {

    // if array null or input provided not array
    if (!(Array.isArray(arrayToSort))) return [];

    // shallow copy of array to sort; so as not to mutate original array
    const arr = [...arrayToSort];

    // initialize array to hold sorted half of values
    const sortedArray = [];

    // set the first element of sortedArray as first element of arrayToSort, just to begin with
    sortedArray[0] = arrayToSort[0]

    // loop through each element of arrayToSort/arr
    for (let i = 1; i < arr.length; i++) {
        // loop through each element of sortedArray in reverse
        for (let j = sortedArray.length-1; j >= 0; j--) {
            // if current element of arr is greater than the current element in sortedArray
            if (arr[i] > sortedArray[j]) {
                // add element to the right of 'j' index in sortedArray
                sortedArray.splice(j+1, 0, arr[i]);
                // exit inner loop
                break;
            } else if (j === 0) {
                // if current element of arr is the minimum value out of all current sorted values
                // add the element to the start of sorted array
                sortedArray.unshift(arr[i])
            }
        } // end: inner for-loop
    } // end: outer for-loop

    // return the sorted array
    return sortedArray;
}

// test
// const arrayToSort = [0,3,99,19,4,40,20,63,11,-5,80,99,201];
// console.log("Unsorted array: ", arrayToSort, "| Sorted array: ", insertionSort(arrayToSort));

module.exports = { insertionSort }