// try{
//     console.log(x);
// }catch(error){
//     console.log('Error : ' + error);
// }


function double(number) {
    if (isNaN(number)) {
      throw new Error(number + ' is not a number');
    }
  
    return number * 2;
  }

  function multy(){
    if(isNaN(number)){
        throw new Error(number + 'is Not a Number')
    }
    return number * number;
  }

  try{
    const y = multy('hello');
    console.log(y);
  }catch(e){
    console.log(e);
  }
  
  try {
    const y = double('hello');
    console.log(y);
  } catch (error) {
    console.log(error);
  }