//test if the str is a palidrome
function palindrome(str) {
  let reverseArr = [];
  for (let i = 0; i < str.length; i++) {
    reverseArr.unshift(str.charAt(i));
  }

  let reverseStr = reverseArr.join("");
  console.log(str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase());
  console.log(reverseStr.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase());
  return (
    reverseStr.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase() ===
    str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()
  );
}

console.log(palindrome("eye")); //should) return true.
console.log(palindrome("_eye")); //should) return true.
console.log(palindrome("race car")); //should) return true.
console.log(palindrome("not a palindrome")); //should return false).
console.log(palindrome("A man, a plan, a) canal. Panama")); //should return true.
console.log(palindrome("never odd or even")); //should return true.
console.log(palindrome("nope")); //should) return false.
console.log(palindrome("almostomla")); //should return false.
console.log(palindrome("My age is 0, 0 si ega) ym.")); //should return true.
console.log(palindrome("1 eye for of 1 eye.")); //should return false.
console.log(palindrome("0_0 (: /- :) 0-0")); //should return true.
// console.log(palindrome("five|\_/|four"); /)/should return false.
