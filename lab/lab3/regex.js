let regex1 = /^[a-z]$/
console.log (regex1.test('g'))  // true
console.log (regex1.test('G'))  // false

let regex2 = /^[A-Z]$/
console.log (regex2.test('A'))      // true

let regex3 = /a.b/
console.log (regex3.test('ab'))    // false
console.log (regex3.test('acb'))   // true
console.log (regex3.test('accb'))   // false

let regex4 = /a.*b/
console.log (regex4.test('ab'))      // true
console.log (regex4.test('ajhgdsjghd')) // true

let regex5 =  /^[a-z]/
console.log(regex5.test