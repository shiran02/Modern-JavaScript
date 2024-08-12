let x;

// Array Literal

const numbers = [12,45,33,27,39];


// Array Constructor

const fruits = new Array('apple' , 'grape' , 'orange');
const cars = new Array('Bmw','Audi','ford');

x = numbers[2];

x = `My Favourite Fruit Is ${fruits[2]}`;
x = `My Dream Vehical Is ${cars[0]}`;

x= cars.length; 

cars[3] = 'nissan';
cars[cars.length] = 'mustangs';

x = cars;

console.log(x);
