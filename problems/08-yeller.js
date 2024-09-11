/*
Define a function yeller that takes in an array of words. The function should
return a NEW array where each element of the original array is yelled.
*/

// Your code here 
// Will need to use the map method for to solve this problem.

function yeller(words) {
    return words.map(word => word.toUpperCase() + '!');
}


let words1 = ['hello', 'world'];
let yelled1 = yeller(['hello', 'world']);
console.log(yelled1);              //=> [ 'HELLO!', 'WORLD!' ]
console.log(words1 === yelled1);   //=> false   //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = yeller;