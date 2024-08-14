// Function Declaration -------

function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(2200));

// Function Expression 

const addPlusSign = function(value){
    return '$' + value;
};


console.log(addPlusSign(200));
