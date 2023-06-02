//Approch-
//All possible pairings (ignoring the ordering of elements) are:
//1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
//2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
//3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
//So the maximum possible sum is 4.
//Complexity
//Time Complexity-O(n)
//Space Complexity-O(1)

function arrayPairSum(nums) {
   let array = [];  //initialize the empty array
    let total = 0;  //set value at start index is 0
    //iterate over an array
    for (let i = 0; i < nums.length; i += 2) {
        total += nums[i];
    }
    return total;
};

console.log(`The maximum possible sum is `, arrayPairSum([1,4,3,2]));