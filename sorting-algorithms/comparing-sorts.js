/**
 * Comparing Bubble, Selection and Insertion sorting algorithms
 * For an array containing random 100,000 positive integer numbers, following sort
 * algorithms will complete the sort in order:
 * 1. Insertion sort (~2 seconds)
 * 2. Selection sort (~3.7 seconds)
 * 3. Bubble sort (~15.6 seconds)
 */

// initialize unsorted array for testing
const unsortedArray = sampleUnsortedArray(99999,718429);

// import sorting methods
const { bubbleSort } = require('./bubble-sort');
const { selectionSort } = require('./selection-sort');
const { insertionSort } = require('./insertion-sort');
const { mergeSort } = require('./merge-sort/merge-sort');
const { quickSort } = require('./quicksort/quicksort');

// for ease in logging to console
log = (...text) => {
    console.log("-----------------------------------------------------");
    console.log(...text);
}

log("Sorting Algorithm Time Test")
log("[size of array: ", unsortedArray.length, "]")

console.log("*****************************************************");
console.time("Bubble Sort");

const bubbleSortResult = bubbleSort(unsortedArray);

console.timeEnd("Bubble Sort");

console.time("Selection Sort");

const selectionSortResult = selectionSort(unsortedArray);

console.timeEnd("Selection Sort");

console.time("Insertion Sort");

const insertionSortResult = insertionSort(unsortedArray);

console.timeEnd("Insertion Sort");

console.time("Merge Sort");

const mergeSortResult = mergeSort(unsortedArray);

console.timeEnd("Merge Sort");

console.time("Quick Sort");

const quickSortResult = quickSort(unsortedArray);

console.timeEnd("Quick Sort");

console.log("*****************************************************");

log("Are results of all sort methods same?: ", areAllElementsSame(bubbleSortResult, selectionSortResult, insertionSortResult, mergeSortResult, quickSortResult));
console.log("*****************************************************");

// Helper functions

// get sample unsorted array containing positive integer numbers
function sampleUnsortedArray(size, max) {
    const randomArray = []
    for (let i = 0; i <= size; i++) {
        randomArray.push(Math.floor(Math.random() * max+1))
    }
    return randomArray;
}

// check for equality; takes in array, returns true if all elements same
function areAllElementsSame(...arr) {
    for(let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i-1][j] != arr[i][j]) {
                return false;
    
            }
        }
    }
    return true;
}