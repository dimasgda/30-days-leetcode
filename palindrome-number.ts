// use string

function isPalindromeUseString(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
}

/**
 * use math to solve the problem
 * we only need to reverse half of the number
 */

function isPalindrome(x: number): boolean {
  if ((x !== 0 && x % 10 === 0) || x < 0) {
    return false;
  }
  let half = 0;
  while (x > half) {
    half = half * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return half == x || x == Math.floor(half / 10);
}
