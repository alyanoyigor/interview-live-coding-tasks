/*
const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
arr2.push(5); 
arr1;                                                       // [1, 2, 3, 4, 5]
arr2;                                                       // [1, 2, 3, 4, 5]

undefined == null;                                          // true
undefined == 0;                                             // false
undefined === 0;                                            // false
undefined >= 0;                                             // false
null >= 0;                                                  // true
false >= 0;                                                 // true
undefined === undefined;                                    // true
undefined >= undefined;                                     // false
[] === [];                                                  // false
{} === {};                                                  // false
Object.prototype.toString.call(arr1);                       // [object Array]

function Class() {}
Class.prototype = {};

const ins = new Class();
ins.question;                                               // undefined

Class.prototype.question = '?';
ins.question;                                               // '?'

Class.prototype = { question: '?' };
ins.question;                                               // undefined
*/

console.log(+[2]);
console.log(+[2, 2]);