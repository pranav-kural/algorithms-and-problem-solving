# Searching Algorithms

## Linear Search

- check each element one by one, until you find the correct element
- some examples of JS functions using this approach:
    - indexOf
    - includes
    - find
    - findIndex
- Big O of linear search: O(n)

## Binary Search

- works on sorted data only!
- uses input to divide or obtain a subset of data to search on (so doesn't have to search through all elements)
- much faster form of search
- dividing the data or obtaining subset for search involves:
    - Take a guess: (minimum val + maximum value) / 2
    - if guess is correct, stop and return result
    - if not correct, then determine if:
        - data before the current guess should be searched (set current guess as maximum), or
        - data after the current guess should be searched (set current guess as minimum)
    - repeat from step 1 until the guess is correct
- often, guess starts from (min val + max val)/2
