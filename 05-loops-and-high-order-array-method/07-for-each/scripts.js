const socials = ['Twitter','LinkedIn','FaceBook','Instragram'];


socials.forEach(function(items){
  console.log(items);
});

// -----------------------------


socials.forEach((item,index,arr)=>{
  console.log(`${index} ${item}` , arr);
});


// --------------------------------

function loginSocial(item){
  console.log(item);
} 

socials.forEach(loginSocial);

// -------------------------------


const socialObj = [
  {name :'Twitter' , ur :'https://twitter.com'},
  {name :'Google' , ur :'https://google.com'},
  {name :'LinkedIn' , ur :'https://lnkedin.com'},
  {name :'Instragram' , ur :'https://instragram.com'},
];

socialObj.forEach((item)=>{console.log(item)});



