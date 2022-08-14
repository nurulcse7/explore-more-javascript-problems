// Copy some element/value from array (not returnable)
const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// Removes elements from an array 
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array
const partial = friends.splice(2, 5);
console.log(partial);  // [ 32, 22, 44, 62, 29 ]
console.log(friends); // [12, 45, 69, 87]

// removed after can add elements
// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial2 = friends.splice(2, 5, 99, 555, 7777);  // here can add
console.log(partial2);  // [ 32, 22, 44, 62, 29 ]
console.log(friends); // [12,   45, 99, 555, 7777, 69, 87]