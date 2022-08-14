// validation/ error handling with function
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
console.log(result); // print: 57
//if
const result2 = add(12, '45');
console.log(result2); // print: Please enter a number

// multiplication in function
function multiply(num1, num2){
    // console.log(num1, num2);
    return num1 * num2;
}
const output = multiply(12, 45);
console.log(output) // print: 540