//Approch
//Complexity
//Time Complexity-O(n)
//Space Complexity-O(1)

// method to shuffle an array of size 2n
function shuffleArray(a, n) {
  // Rotate the element to the left
  for (let i = 0, q = 1, k = n; i < n; i++, k++, q++)
    for (let j = k; j > i + q; j--) {
      // swap a[j-1], a[j]
      let temp = a[j - 1];
      a[j - 1] = a[j];
      a[j] = temp;
    }
}

//Question Return the array in the form [x1,y1,x2,y2,...,xn,yn].
let a = [2,5,1,3,4,7];
shuffleArray(a, a.length / 2);

console.log(`After the Shuffled integers are `, a.join(" "));
