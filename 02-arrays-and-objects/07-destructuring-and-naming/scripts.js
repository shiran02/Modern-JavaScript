//most java script developers Do This


const firstName = 'Shiran';
const lastName = 'Shiran';
const age = 27;


const person = {
    firstName,
    lastName : lastName,
    age : age,
}

console.log(person);

//Destructuring ------------------

const todo = {
    id : 1,
    title:'Hello world',
    user : {
        name : 'shiran'
    }
}

const { id , title , user : {name}} = todo;


// -------------------------------------------

const numbers = [12,34,23,4];

const [first,second , ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);