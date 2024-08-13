let x;

const todo = new Object();


todo.id = 3;
todo.name = 'Shiran';
todo.completed = false;

x = todo;


const person = {
    address :{
        coods : {
            lat : 43.44,
            lng : -34.33,
        }
    }
};

x = person.address.coods.lat;
console.log(x);
// -----------------------------------


const obj1 = {a:1 , b:2};
const obj2 = {c:3 , d:5};

const obj3 = { ...obj1 , ...obj2}


// assign Objects --------------------


const obj4 = Object.assign({} , obj1,obj2);

console.log(obj4);

// arrays Object --------------------------------

const todos = [
    {id: 1  , name : 'Shiran'},
    {id: 2  , name : 'isira'},
    {id: 3  , name : 'uditha'},
];

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values;
x = Object.entries(todo);
x = todo.hasOwnProperty('age');

console.log(x);

