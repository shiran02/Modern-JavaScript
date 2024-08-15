let i = 0;


while(i <= 100){
    
    if(i % 3 === 0){
        console.log(`${i} Fizz`);  
    }else if(i % 5 === 0){
        console.log(`${i} Buzz`);  
    }else if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} FizzBuzz`);  
    }else{
        console.log(`${i}`);  
    }
    i++;
}


for(let i = 0  ; i <=100 ; i++){
    console.log(i);  

    if(i % 3 === 0){
        console.log(`${i} Fizz`);  
    }else if(i % 5 === 0){
        console.log(`${i} Buzz`);  
    }else if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} FizzBuzz`);  
    }else{
        console.log(`${i}`);  
    }
}