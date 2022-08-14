const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
// const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// ---------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1 ){

}

// combine tow array using with concat (two array join)
// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
const newFriendsAge = [12, 13, 11, 13]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)
// print: 
// [
//     12, 13, 11, 13, 13,
//     14, 11, 17, 21, 16,
//     15, 20
// ]

/*----------------------------
// Check object type
const student = {id: 121, class: 11, name: 'Agun'};
console.log(typeof student);   // print: object


// Check function type
function add(num1, num2) {
    return num1 + num2;
}
console.log(typeof add);  // print: function


// Check array type 
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// console.log(typeof friends); //  // print: object 
// but we know that is array, follow below process to detect array
console.log(Array.isArray(friends));    // print: true
--------------------------------------------*/

/*-------------------------------------
// Search/find out value in array
// first process with includes
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
console.log(friends.includes(19));  // print: false
console.log(friends.includes(21)); // print: true

// second process with indexOf
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
if (friends.indexOf(252) !== -1) {
    console.log('Yes! value is there')
}
else{
    console.log('Oops! not exist value')
}
//if indexOf(11) then print: Yes! value is there
// if indexOf(252) then print: Oops! not exist value
-------------------------------------*/

