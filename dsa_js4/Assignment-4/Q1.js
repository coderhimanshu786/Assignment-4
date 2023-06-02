function findClosest(A, B, C, p, q, r) {
  let diff = Math.pow(10, 9); // Initialize min diff

  // Initialize result
  let res_i = 0,
    res_j = 0,
    res_k = 0;

  // Traverse arrays
  let i = 0,
    j = 0,
    k = 0;
  while (i < p && j < q && k < r) {
    // Find minimum and maximum of current three elements
    let minimum = Math.min(A[i], Math.min(B[j], C[k]));
    let maximum = Math.max(A[i], Math.max(B[j], C[k]));

    // Update result if current diff is less than the min
    // diff so far
    if (maximum - minimum < diff) {
      (res_i = i), (res_j = j), (res_k = k);
      diff = maximum - minimum;
    }

    // We can't get less than 0 as values are absolute
    if (diff == 0) break;

    // Increment index of array with smallest value
    if (A[i] == minimum) i++;
    else if (B[j] == minimum) j++;
    else k++;
  }

  // Print result
  document.write(A[res_i] + " " + B[res_j] + " " + C[res_k]);
}

//Question print integers appeared in all three array
let A = [1, 4, 10];
let B = [2, 15, 20];
let C = [10, 12];

let p = A.length;
let q = B.length;
let r = C.length;

findClosest(A, B, C, p, q, r);
