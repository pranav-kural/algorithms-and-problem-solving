/**
 * Comparing Bubble, Selection and Insertion sorting algorithms
 */

// initialize unsorted array for testing
const unsortedArray = sampleUnsortedArray(99999,718429);

function sampleUnsortedArray(size, max) {
    const randomArray = []
    for (let i = 0; i <= size; i++) {
        randomArray.push(Math.floor(Math.random() * max+1))
    }
    return randomArray;
}

// import sorting methods
const { bubbleSort } = require('./bubble-sort');
const { selectionSort } = require('./selection-sort');
const { insertionSort } = require('./insertion-sort');

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
console.log("*****************************************************");

log("Are results of all sort methods same?: ", 
((bubbleSortResult.join('') === selectionSortResult.join('')) && (bubbleSortResult.join('') === insertionSortResult.join(''))));
console.log("*****************************************************");