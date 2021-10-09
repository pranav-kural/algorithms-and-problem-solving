// implementation of bubble sort

/**
 * Given an array of number, sort them in ascending order using bubble sort.
 * Bubble sort main idea: start from beginning, check two corresponding items, 
 * swap to bring greater item on the right side, keep following the process till end of array,
 * then repeat again from start. Sorting completes when no swaps needed.
 */

const bubbleSort = (arrOfNumbers) => {
    // shallow copy of original array; values of original array are not mutated
    const arr = [...arrOfNumbers]
    // flag to check if no swaps happened (i.e., array is sorted)
    let noSwaps;
    // outer loop: iterate in decreasing order, from length of array till 0
    for (let i = arr.length; i > 0; i--) {
        // set noSwaps to true initially
        noSwaps = true;
        // inner loop: loop through array elements
        for (let j = 0; j < i-1; j++) {
            // inner loop iterates 1 minus i; i decreases as we bubble up larger values at the end of sorted array        
            // check if the current number (on left side) if greater than the number next to it (on right side)
            if (arr[j] > arr[j+1]) {
                // if number on left is greater, swap values
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                // update swap
                noSwaps = false;
            }
        }
        // if no swaps happened (array is sorted)
        if (noSwaps) break;
    }
    // return sorted array
    return arr;
} // end: bubbleSort

// test
// const unsortedArray = [10,2,4,1,19,0,55,10,96,3,5,201];
// console.log(`Unsorted values: [${unsortedArray}] | sorted values: [${bubbleSort(unsortedArray)}]`);

module.exports = { bubbleSort }