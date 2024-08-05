// Values are store on the Stack

const name = 'John';
const age = 26;


//reference value store in HEAP

const person = {
    name : 'Brad',
    age : 34,
}

let newName = name;
newName = 'shiran'

let newPerson = person;
newPerson.name = 'kumarasingha';


console.log(name,newName);
console.log(newPerson,person);

