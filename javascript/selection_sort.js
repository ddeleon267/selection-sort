// 1. restate problem
// when given array of integers, return array of ints sorted in ascending order

// e.g.
// given [5, 6, -3, 7, -1, 5, 4], return [-3, -1, 4, 5, 5, 6, 7]

// edge cases - empty start array? array with one val?

// pros: not destructive - but can easily make Ian's solution non-destructive, so not much benefit doing it this way
// cons: fugly, hard to read, slow

function selectionSort(arr) {
  const sortedArr = []

  for (let i = 0; i < arr.length; i++){

    let midVal = Math.floor((sortedArr.length / 2))
 
    for (let j = midVal; sortedArr.length < arr.length;) {
        if (sortedArr[j] === undefined){
          if (j >= 0){
            sortedArr.push(arr[i])
          } else {
            sortedArr.unshift(arr[i])
          }
          break
        } else if (arr[i] > sortedArr[j]){
          if (sortedArr[j + 1] && arr[i] <= sortedArr[j + 1]){
            sortedArr.splice(j + 1, 0, arr[i])
            break
          }
          j++
        } else if (arr[i] === sortedArr[j]){
          sortedArr.splice(j + 1, 0, arr[i])
          break
        } else if (arr[i] < sortedArr[j]){
          j--
        }
    }
  }
  return sortedArr
}

// pseudocode
// create new array
// loop through unsorted array
  // start at middle of new array
    // does value at this index exist in new array?
      // if not, add current val from unsorted array into new array
        // break out of inner loop, time for next unsorted val
    // if it does exist, is it greater than current value in new array?
        // if so, but it is LESS than the following value in sorted array, add it in at next val index and break, move to next unsorted val
        // otherwise, move to the right index in new array, restart inner loop
    // is current value of unsorted array equal to  current value in new array?
        // if so, add in new value at current position, and break, move to next unsorted val
    // is current value of unsorted array less than current value in new array?
        // if so, move to the left in new array, restart inner loop
// once the sorted array has same num items as unsorted array, you're done
// return new, sorted arr



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-3, -1, 5, 6, 7]");
  console.log("=>", selectionSort([5, 6, -3, 7, -1]));

  console.log("");

  console.log("Expecting: [-5, -3, 0, 3, 5]")
  console.log("=>", selectionSort([0, -3, 3, 5, -5]))

  console.log("");

  console.log("Expecting: []")
  console.log("=>", selectionSort([]))

  console.log("");

  console.log("Expecting: [5]")
  console.log("=>", selectionSort([5]))

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  // benchamarking
  //store the current time in a variable called start time
  const startTime = Date.now()

  // loop 1000 times:
  for (let i = 0; i < 1000; i++){
    selectionSort([0, -1, -5])
    selectionSort(longInput)
  }
  const avgRuntime = (Date.now() - startTime) / 2000
  console.log("Avg runtime is", avgRuntime)
  //   execute the method using a small input, e.g.three items if input is an Array
  //   execute the method using a larger input, e.g. 100 items if input is an Array

  // average runtime = (current time - start time) / 2000
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
