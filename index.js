function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) return true;
      }
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}
*/

/* 
  Add your pseudocode here
   use for of to check and iterate i as long as it is less than array length
   declare a constant that takes the target minus the array at the index i
   use for of to iterate j by adding it to one and i
   use if to check iff the array at index j is equal to compliment
   return true if it does
*/

/*
  Add written explanation of your solution here
  function that checks if two numbers in an array add up to some target number.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
  console.log("");
}

module.exports = hasTargetSum;
