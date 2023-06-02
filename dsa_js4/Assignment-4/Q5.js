//Approch
//Simply deduct from 1 to n, where we try to get as many levels as possible
//Complexity
//Time complexity O(n)
//Space complexity O(1)

function arrangeCoins(n) {
    let level = 0;
    let coin = 1;
    while (n >= coin) {
        n -= coin;
        coin++;
        level++;
    }
    return level;
};

console.log(arrangeCoins([5]));
