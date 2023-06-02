//Approch
//initialize arr with map function and for square of each element using power then sort an hole array in decreasing order

const sortedSquares = function(nums) {
    const arr =  nums.map(value => Math.pow(value,2));
    return arr.sort((a,b)=> a-b);
    
  };

  console.log(sortedSquares([-4,-1,0,3,10]));