const numbers = [1,2,3,4,6,7,8,9,10,11];


const evenNumbers =  numbers.filter(function (number){
  return number % 2 === 0;
});

console.log(evenNumbers);


// shirt verdion -------------

const evenNumber = numbers.filter(
  (number)=> number % 2 === 0
);

// same with eachEach ------------

const evenNumberList = [];

numbers.forEach(function (number){
  if(number % 2 === 0){
    evenNumberList.push(number);
  }
})

console.log(evenNumberList);


// get Only Retail Company ---------------------------

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

let filterList = [];

filterList = companies.filter(
  function(Company){
    if(Company.category === 'Retail'){
      return Company;
    }
    //console.log(Company);
  }
);

//console.log(filterList);


// Get Companies That Started in Or After 1980 and ended in Or Before 2005 -------------


const earlyCompanies = companies.filter((Company)=> Company.start >= 1980 && Company.end <= 2005);
console.log(earlyCompanies);


// Get Company old 10 years --------------------------



const oldCompanies = companies.filter((Company)=> Company.end  -Company.start  >= 10);
console.log(oldCompanies);
