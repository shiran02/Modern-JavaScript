const myString = 'developer';

// x = myString.charAt(0);
// x = x.toUpperCase();
// x = x + myString.substring(1,9);
// console.log(x);

let myNewString;

// solution 1

myNewString  = myNewString.charAt(0).toUpperCase() + myString.substring(1);


// solution 2

myNewString = myNewString[0].toUpperCase() + myString.substring(1);

// solution 3

myNewString = '${myNewString[0].toUpperCase()} ${myString.substring(1)}';

console.log(myNewString);
