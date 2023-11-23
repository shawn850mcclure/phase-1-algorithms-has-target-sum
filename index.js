function hasTargetSum(array, target) {
  // Write your algorithm here
  
  //checking each number in the array
  for(let i = 0; i < array.length; i++){
    //checking other numbers the first array didnt check
    for(let j = i + 1 ; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false
}//returns false if loops through array with no target aquired

/* 
  Write the Big O time complexity of your function here
*///O(n)

/* 
  Add your pseudocode here
*///function hasTargetSum array and target
      //for let first variable in array choose number
      //for let second variable in array choose other number
      //if arrayi plus arrayj is the target number return true
  //return false if not target and reach end of array

/*
  Add written explanation of your solution here
*/// the function hasTargetSum loops through an array for a target,
//the first variable picks out a number out of the array and the second variable,
//picks one other than the first variable picked out. if the 2 numbers reached the target number,
//return true, if loops through whole array and gets no target return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([9,12,4,6,18,20], 29))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,2,3,4,5,6,7,8,9,10,12,15,16,71,18,19,22],23))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
