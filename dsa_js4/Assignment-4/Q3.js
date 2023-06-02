//With Approch--

let N = 3;
// Finds transpose of A in-place
function transpose(A) {
  for (i = 0; i < N; i++)
    for (j = i + 1; j < N; j++) {
      let temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
}

// Driver code

let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

transpose(A);

console.log("Modified matrix is <br/>");
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) console.log([A[i][j] + " "]);
  console.log(/<br/);
}
