// normal function ---

function add(a,b){
    return a + b;
}

// Arrow Function syntax -----


const add1 = (a ,b) => {
    return a + b;
}

// implicit return ------


const substract = (a,b)=> a-b;


// can leave off () with a single param

const double = a => 1 + a;


console.log(add(1,2));
console.log(substract(1,2));
console.log(double(1,2));