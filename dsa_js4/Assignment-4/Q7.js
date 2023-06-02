//Approch
//For a matrix cell to be maximum value , we need to figure out the most overlapping cell between the given set of operations/matrix cell positions as the range of cells which overlaps the most will get chance to increment more number of times.
// first operation each cell value is incremented from (0,0) to (2,2) , in second operation each cell from (0,0) to (2,2) again got incremented as it overlaps with (3,3).
//We are taking product because we need to find out the count of the maximum integer in the matrix after performing all the given operations.

var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;
  let min = [m, n];
  for (let [x, y] of ops) {
    min = [Math.min(x, min[0]), Math.min(y, min[1])];
  }
  return min[0] * min[1];
};

let m = 3;
let n = 3;
let ops = [
  [2, 2],
  [3, 3],
];
