/* 
1. show output from: 8-16 
2. if the number is divisible by 3 then instead of the number, show 'foo'
3. if the number is divisible by 5 then instead of the number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/
for(let i = 8; i <= 16; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}
// print:
8
foo
bar
11
foo
13
14
foobar
16
// (You can also do 1-50, that time if(let i = 1; i <= 50; i++) 