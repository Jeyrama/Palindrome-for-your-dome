/*
A palindrome is a word, phrase, number, or other sequence of symbols or elements, 
whose meaning may be interpreted the same way in either forward or reverse direction.
Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:
  "Amore, Roma" => valid
  "A man, a plan, a canal: Panama" => valid
  "No 'x' in 'Nixon'" => valid
  "Abba Zabba, you're my only friend" => invalid

Notes:
  You can see that the input is case insensitive and disregards non alphanumeric characters.
  The empty string "" can be read forward or backward the same, it's a palindrome in our case.
*/


// Solution 

function palindrome(string) {
  let s = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0; i < s.length/2; i++) if (s[i] != s[s.length-i-1]) return false;
  return true;
}

// or

const palindrome = string => {
  string = string.replace(/[\W_]+/g, '').toLowerCase();
  
  return string === [...string].reverse().join``;
}