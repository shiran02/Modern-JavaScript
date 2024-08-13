let x;

const person ={
    name : 'shiran',
    age :30,
    isAdmin : true,
    address : {
        street : '4th Lane',
        no  :  207,
    },
    hobbies :['run','swiming','watching'],
}

x = person.name;
x = person['age'];
x = person.address.street;
x = person['address']['no'];
x = person.hobbies[1];


// delete attribute in object

delete person.age;

// add attribute ----------------

person.hasChildren = false;

// add fuction to object -------

person.greet = function(){
    console.log(`Hello My Name is ${this.name}`);
}


// ------

const child = {
    'first Name' : 'shiran',
    'last Name' : 'Kumarasingha',
};

x = child['first Name'];

console.log(x);