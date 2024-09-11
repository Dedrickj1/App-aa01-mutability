/*
Define a function called oddRange that takes in a number parameter and returns
an array  containing all positive odd numbers up to that number.
*/

// Your code here 

// trying to figure out how to create a function that takes in number parameter 
// and returns an array containing all positive odd numbers.


function oddRange(max) {
    let result = [];

    for (let i = 1; i <= max; i += 2){
        result.push(i);
    }
    return result;
}

console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = oddRange;