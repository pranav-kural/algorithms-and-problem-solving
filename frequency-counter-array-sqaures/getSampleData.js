// module: get sample data
// returns two arrays, each containing numbers (integers)

module.exports = {
    // getting perfect sample data, size of data by max, starts from min
    getPerfectSamples: (min, max) => {
        let nums = []
        let numsSquares = []
        for (let i = min; i <= max; i++) {
            num = Math.floor(Math.random() * max+1);
            nums.push(num)
            numsSquares.push(num**2)
        }
        return [nums, numsSquares]
    },
    // getting imperfect sample data, size of data by max, starts from min
    getImperfectSamples: (min, max) => {
        let nums = []
        let numsSquares = []
        for (let i = min; i <= max; i++) {
            num = Math.floor(Math.random() * max+1);
            nums.push(num)
            // only add a corresponding square if number not divisble by 3 or 7
            if (num % 3 == 0 || num % 7 == 0) {
                numsSquares.push(Math.floor(Math.random() * max+1))
            } else {
                numsSquares.push(num**2)
            }
        }
        return [nums, numsSquares]
    }
}