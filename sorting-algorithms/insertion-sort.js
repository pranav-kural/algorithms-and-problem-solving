/**
 * Implementation of insertion sorting algorithm
 */

 const insertionSort = (arrayToSort) => {

    // if array null or input provided not array
    if (!(Array.isArray(arrayToSort))) return [];

    // shallow copy of array to sort; so as not to mutate original array
    const arr = [...arrayToSort];

    // loop through each element of arrayToSort/arr
    for (let i = 1; i < arr.length; i++) {
        
        // contain the value of current element in temporary variable
        let currentElement = arr[i];

        // compare i-th element with the elements of sorted section of array
        let j = i-1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j+1] = arr[j];
            j--;
        } // [3, 19, 99, 4]
        arr[j+1] = currentElement;
    } // end: outer for-loop

    // return the sorted array
    return arr;
}

// test
// const arrayToSort = [0,3,99,19,4,40,20,63,11,-5,80,99,201];
// console.log("Unsorted array: ", arrayToSort, "| Sorted array: ", insertionSort(arrayToSort));

module.exports = { insertionSort }