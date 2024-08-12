
let x;
const arr = [23,43,25,46,34];


/*

// --------------------------------------------

// add value at last ---
arr.push(3);

// remove last value ---
arr.pop();

// add value to first ---
arr.unshift(24);

// remove value in to first -

arr.shift();

// reverse the array ---

arr.reverse();

*/

// ------------------------------------------------------

// check value is Include in array or Not --
x = arr.includes(46);

// get index of array elements ---

x = arr.indexOf(43);

// -------------

x  = arr.slice(1 , 3);

// -----------

x = arr.splice(1,3)

// ---------

x = arr.splice(1,4).reverse().toString().charAt(0);

console.log(x);