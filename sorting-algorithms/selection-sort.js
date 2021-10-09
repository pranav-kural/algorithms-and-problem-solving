/**
 * Implementation of selection sort
 */

const selectionSort = (arrayToSort) => {

    // if array null or input provided not array
    if (!(Array.isArray(arrayToSort)) || !(arrayToSort)) return [];

    // shallow copy of array to sort; so as not to mutate original array
    const arr = [...arrayToSort];

    // outer loop: iterate the times of number of elements in arr
    for (let i = 0; i < arr.length; i++) {
        // initialize and store index of current minimum value; set it to i-th element to begin
        let minimumValueIndex = i;
        // inner loop: loop and check for minimum value to swap
        for (let j = i+1; j < arr.length; j++) {
            // find the minimum value if any
            if (arr[j] < arr[minimumValueIndex]) {
                // update minimum value index and current
                minimumValueIndex = j;
            }      
        } // end: inner for-loop

        // check if swap needed
        if (i != minimumValueIndex) {
            // swap the current value (based on pointer 'i') with the minimum value
            [arr[i], arr[minimumValueIndex]] = [arr[minimumValueIndex],arr[i]];
        }
    } // end: outer for-loop
    //return sorted array
    return arr;
}

// test
// const arrayToSort = [0,3,99,19,4,40,20,63,11,-5,80,99,201];
// console.log("Unsorted array: ", arrayToSort, "| Sorted array: ", selectionSort(arrayToSort));

module.exports = { selectionSort }