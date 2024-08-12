let x;

const fruits = ['apple','pear','orange'];
const barries = ['straberry','blueberry','reseberry'];


//fruits.push(barries);

//x = fruits[3][1];

const allFruits = [fruits , barries];

x = allFruits[0][2];



// concat --------------------

x = fruits.concat(barries);

// spread oparetors (...) -------------

x = [...fruits , ... barries];

// Flatten Arrays -----------------

const arr = [1,2, [3,4] , 5 , [6,7] , 8];
// console.log(arr);
// x = arr.flat();
// console.log(x);


// static Methds On Array Object --------------


// check Array or Not ---
x = Array.isArray(fruits);

// arrays from --

x = Array.from('12345');

// array of ---

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);

console.log(x);