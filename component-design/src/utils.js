//get random 6 roll
function dice6 () {
  return Math.floor(Math.random() * 6) + 1;
}

//get # rolls
function getRolls(n) {
  return Array.from({length: n}, () => dice6());
}

//get sums
function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export {dice6, getRolls, sum};