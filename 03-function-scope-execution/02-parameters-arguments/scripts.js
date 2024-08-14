// default parameters --------------------

function registerUser(user = 'Bolt'){
    return user + ' is Register';
}

console.log( registerUser());


//Rest Params ----------------


function sum(...numbers){
    let total = 0;

    for(const num of numbers){
        total += num;
    }

    return total
}


console.log(sum(1,2,3,4,5,6,7));

// objects as params ----------------


 function loginUser(user){
    return `The User ${user.name} with The Id of ${user.id} id Logged in`;
 }

 const user = {
    id: 1 ,
    name : 'John',
 };

 console.log(loginUser(user));



 //Array As params --------------------


 function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
 }


 getRandom([1,2,3,4,5,6,7,89])
