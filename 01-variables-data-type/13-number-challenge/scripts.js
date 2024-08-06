let x,y;
let sum , difference,product,quotient,reminder;


x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sum = x + y;
difference = x - y;
product = x * y;
reminder = x % y;


console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} + ${y} = ${difference}`);
console.log(`${x} + ${y} = ${product}`);
console.log(`${x} + ${y} = ${reminder}`);