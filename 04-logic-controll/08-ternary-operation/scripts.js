const age = 13;


// using an if statement

if(age >= 16){
    console.log('You Can  vote');
}else{
    console.log('You Can Not vote');
}


// Using a ternary Operators ---------------

age >= 16 ? console.log('You Can  vote') : console.log('You Can Not vote');


// Assign a conditional value to a variable ---------------

const vote = age >= 16 ? true : false;
const voteString =  age >= 16 ? console.log('You Can  vote') : console.log('You Can Not vote');


// Multyple statement -----------

const auth = false;

let redirect;

if(auth){
    alert('Welcome to the dashboard');
    redirect = '/dashboard';
}else{
    alert('Acess Denied');
    redirect = '/login';
}

console.log(redirect)

// second way ---

const redirect2 = auth ? (alert('Welcome to the dashboard'),'/dashboard') : (alert('Acess Denied'),'/login');

// third wat ---

auth && console.log('welcome to the dashboard');

