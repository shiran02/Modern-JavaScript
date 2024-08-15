
// challeng 1 -----------------------------

const people = [
    {
        firstName:'John',
        lastName:'Doe',
        email:'jihnDoe@gmail.com',
        phone:'123-232-232',
        age:34,
    },

    {
        firstName:'jane',
        lastName:'Poe',
        email:'janePoe@gmail.com',
        phone:'123-232-232',
        age:24,
    },

    {
        firstName:'eew',
        lastName:'sore',
        email:'eewsore@gmail.com',
        phone:'123-232-232',
        age:45,
    },

    {
        firstName:'JohJose',
        lastName:'cose',
        email:'johncode@gmail.com',
        phone:'123-232-232',
        age:34,
    }
];

// ----


const youngPeople = [];

people.map((people)=>{
        if(people.age >=25 ){
            youngPeople.push({
                name : `${people.firstName} ${people.lastName}`,
                email : `${people.email}`,
            });
        }
    }
)

const youngPeople2 = people
.filter((people)=>people.age >=25)
.map((people)=> (
    {
        name : people.firstName + people.lastName,
        email : people.email,
    }
)
);


console.log(youngPeople2);


// challenge 2 ---------------


const numbers = [2,4,5,-12,-3,2,-34,23,-3];

const positiveNumbers = numbers
.filter((numbers)=> numbers >= 0 )
.map((num)=>num);

console.log(positiveNumbers);


// challenge 3 ----------------


const words = ['coders','programmers','developers'];


const cWords = words.map((words)=> {
    return words[0].toUpperCase() + words.slice(1,words.length)
});

console.log(cWords);