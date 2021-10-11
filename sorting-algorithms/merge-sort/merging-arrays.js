/**
 * Implementation of a helper function for merging two sorted number arrays
 * 
 * Example:
 *  Input: [1,3,4,80],[3,15,99,102]
 *  Expected output: [1,3,3,4,15,80,99,102]
 */

const mergeSortedArrays = (arr1, arr2) => {
    // initialize variables
    let i = 0;  // pointer for arr1
    let j = 0;  // pointer for arr2
    const sortedArray = []; // for holding sorted values
    // loop through elements of arr1 & arr2
    while (i < arr1.length && j < arr2.length) {
        // if element of arr1 is less than element of arr2
        if (arr1[i] <= arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;    // move to next element of arr1 in next iteration
         } else {
             sortedArray.push(arr2[j])
             j++;   // move to next element of arr2 in next iteration
         }
         if (i == arr1.length) {
             sortedArray.push(...arr2.slice(j, arr2.length));
             break;
         } else if (j == arr2.length) {
            sortedArray.push(...arr1.slice(i, arr1.length));
         }
    }
    return sortedArray;
};

// test
// console.log("Merged array: ", mergeSortedArrays([1,3,4,80],[3,15,99,102]));

module.exports = { mergeSortedArrays };