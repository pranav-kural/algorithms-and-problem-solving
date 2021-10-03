/* Given two arrays, find out if for each element in one array, 
there is a corresponding sqaure value in the other array */
// let arr1 = [1,2,1]
// let arr2 = [4,1,1]

// each number of first array, has a corresponding sqaure value in the second array

// [1,2,3] -> [1,4,9] = true
// [1,2,1] -> [4,1,4] = false
// [1,3]   -> [1,9]   = true

// if arrays are empty or nullish
// OR if size of the arrays is not same
// OR if any of the arrays contain anything other than a number
//  - RETURN false
// if not empty
//  sort both arrays in ascending order
//  loop through the arrays
//      for each iteration, check if a = b^2
//      (where a is element of arr1 & b is element of arr2)
//      if at any point its not equal -
//      - RETURN false
//  If loop completes (i.e.) all values match
//  - RETURN true