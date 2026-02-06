// scripts.js

let regex1 = /^[a-z]$/; // checks if first word is [a to z]

console.log(regex1.test('g')); // true, g belongs to [a to z]
console.log(regex1.test('A')); // false, A doesn't belong to [a to z]

let regex2 = /^[A-Z]$/;
console.log(regex2.test('A')); // true, A belongs to [A to Z]

// wildcard in regex
let regex3 = /a.b/; // exactly one character must be in middle of a and b
console.log(regex3.test('ab'));   // false, nothing is between a and b
console.log(regex3.test('acb'));  // true, c comes in between a and b
console.log(regex3.test('accb')); // false, two characters between a and c

// closure properties
let regex4 = /a.b/; // any number of characters between a and b,
// 0 number of character is also accepted
console.log(regex4.test('ab'));        // true, because 0 number of character in between a and b is also accepted
console.log(regex4.test('ajlsdfjsdfb'));// true, any number of characters in between a and b is accepted


let regex5 = /^[a-z]$/; // all letters must be lowercase
console.log(regex5.test('abcdef')); // true, all letters are lowercase
console.log(regex5.test('abcAb'));  // false, A is uppercase

// quantifier
let regex6 = /^a+$/;
let regex7 = /^a*$/;
console.log(regex6.test('a'));  // true, there is one a
console.log(regex6.test(''));   // false, there must be one a

// diff between quantifier and closure
console.log(regex7.test(''));   // true, because closure also contains 0

// optional
let regex8 = /colou?r$/; // 'u' may or may not appear, if appears then only appears once
console.log(regex8.test('color'));  // true, 'u' doesn't appear
console.log(regex8.test('colour')); // true, 'u' appears once
console.log(regex8.test('colouur'));// false, 'u' cannot appear twice

// look ahead
// let regex9 = /^(?=.a)$/; // look ahead for at least one 'a'
// this gives failure because (?=) doesn't consume any space i.e
// /^(?=.a)$/ is equivalent to /^$/ i.e doesn't consume any space

let regex9 = /^(?=.a).+$/; // check whether string contains at least one 'a'

console.log(regex9.test('jskdflsfdadsfkl')); // true, contains one 'a'
console.log(regex9.test('sljkgfhklru'));     // false, doesn't contain 'a'


// Regex to check whether string contains at least one lowercase
let regex10 = /^(?=.[a-z]).+$/;
console.log(regex10.test('ASDHDSDFDS')); // true, contains 's'
console.log(regex10.test('JHSDSFFD'));   // false, doesn't contain any lowercase


// Regex to check whether string contains at least one uppercase AND one lowercase
let regex11 = /^(?=.[a-z])(?=.[A-Z]).+$/;
console.log(regex11.test('A'));   // false, doesn't contain a lowercase
console.log(regex11.test('b'));   // false, doesn't contain an uppercase
console.log(regex11.test('Ab'));  // true, contains at least an uppercase and lowercase


// Regex to check whether string contains at least one uppercase OR one lowercase
let regex12 = /^(?=.[a-z]|.[A-Z]).+$/;
console.log(regex12.test('A'));    // true, contains a lowercase
console.log(regex12.test('b'));    // true, contains an uppercase
console.log(regex12.test('Ab'));   // true, contains an uppercase and lowercase
console.log(regex12.test('123'));  // false, doesn't contain an uppercase and lowercase


let regex13 = /^.{8,}$/; // check if string is at least 8 characters long
console.log(regex13.test('abcdefgh'));   // true, string is 8 characters long
console.log(regex13.test('abcdefghijk'));// true, string is > 8 characters long
console.log(regex13.test('abcde'));      // false, string is < 8 characters long


let regex14 = /^(?=.[^a-zA-Z0-9]).+$/; // check for symbols
// check for characters which are not [a-z], [A-Z] and [0-9]
// i.e symbols
console.log(regex14.test('ajc'));     // false, no symbols
console.log(regex14.test('sldf$lksd'));// true, contains $


//
// Regex to check whether string contains at least 1 lowercase, 1 uppercase, 1 symbol, 1 digit and must be 8 characters long

let regex_password = /^(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?=.*[0-9]).{8,}$/;
console.log(regex_password.test('aB$12'));     // false, not 8 characters long
console.log(regex_password.test('Hcoe@1234_'));// true