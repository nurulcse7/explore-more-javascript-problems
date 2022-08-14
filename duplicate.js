// function declare with array to show array elements
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
    'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name)
    }
}
// const uniqueNames = removeDuplicate(names); // print: abul ...... abul 

// Remove duplicate elements from array
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
//  'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
} 
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
// print: [ 'abul',  'babul', 'cabul', 'dabul', 'ebul',  'kabul', 'gabul']