//With Approch

// **Question 2**
//Given two **0-indexed** integer arrays nums1 and nums2
let num1 = [1,2,3];
let p = num1.length;
let num2 = [2,4,6];
let q = num2.length;
var findDifference = function(nums1, nums2, p, q) {
    let arr1 = [], arr2 = []; // initialize an empty array arr1 and arr2
    for(let i=0; i<nums1.length; i++){ // loop through the every element of an array num1
        if(!nums2.includes(nums1[i])){ // if every element of num1 is not present in nums2
            arr1.push(nums1[i]); // then push the element of num1 in arr1
        }
    }
    //similarly for the second array traverse over it
    for(let j=0; j<nums2.length; j++){ // loop through the every element of array num2
        if(!nums1.includes(nums2[j])){ // if every element of num2 is not present in nums1
            arr2.push(nums2[j]); // then push the element of num2 in arr1
        }
    }
    return [[...new Set(arr1)], [...new Set(arr2)]]; // return the unique element of arr1 and arr2 inside new array
};

console.log(findDifference(num1, num2, p, q));



