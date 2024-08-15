const number = [1,2,3,4,5,6,7];

const doubleNumbers = number.map(
  function(num){
    return num * 2;
  }
);

const doubleNumbers2 = number.map((num)=> num * 2);

//console.log(doubleNumbers2);

// same with for each ---------------------------------------

const doubleNumbers3 = [];

number.forEach(
  function (num){
    doubleNumbers3.push(num *2);
  }
);


console.log(doubleNumbers3);



const companies = [
  {name : 'Company 1' , category :'Finance' , start:'1981',end:'2004'},
  {name : 'Company 2' , category :'Retail' , start:'1982',end:'2008'},
  {name : 'Company 3' , category :'Auto' , start:'1981',end:'2004'},
  {name : 'Company 4' , category :'Retail' , start:'1981',end:'2004'},
  {name : 'Company 5' , category :'Technology' , start:'1981',end:'2004'},
  {name : 'Company 6' , category :'Finance' , start:'1981',end:'2004'},
  {name : 'Company 7' , category :'Auto' , start:'1986',end:'1996'},
  {name : 'Company 8' , category :'Technology' , start:'2011',end:'2016'},
  {name : 'Company 9' , category :'Technology' , start:'1981',end:'1989'},
];


// create Company name array ------------


const companyName = companies.map((company)=> company.name);
console.log(companyName);

const companyName2 = [];

companies.forEach((company)=> companyName2.push(company.name));


console.log(companyName2);

// Create an Array With Just company and Category --------------

const companyInfo = companies.map((company)=>{
  return {
    name:company.name,
    category : company.category,
  };
});

console.log(companyInfo);

// Crate an array of Objects with the name and the length of each company in years

const companyYears = companies.map((company)=>{
  return {
    name:company.name,
    length : company.end - company.start + ' Years',
  };
});

console.log(companyYears);


//chain map method ---------------------------



const squareAndDouble = number
  .map((number)=> Math.sqrt(number))
  .map((sqrt)=>Math.sqrt(sqrt));

console.log(squareAndDouble);


// long way--

const squareAndDouble2 = number
    .map(function (number){
      return Math.sqrt(number);
    })
    .map(function (sqrt){
      return sqrt * 2;
    })
    .map(function (sqrtDouble){
      return sqrtDouble * 2;
    });

    console.log(squareAndDouble2);

    // chaining with different methods ------------

    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const evenDouble = numbers.filter(
        (number)=> number %2 === 0
      ).map(
        (even)=> even * 2 
      );

    console.log(evenDouble);



