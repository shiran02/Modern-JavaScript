let i = 0;

while(i<=20){
    console.log('Number ' + i);
    i++;
}


// loop over arrays -----------------

const arr = [10,20,30,40];

while(i < arr.length){
    console.log(arr[i]);
    i++;
}

// nesting while loop --------------------


while(i <= 5){
    console.log('Number '  + i);
    
    let j = 0;
    while(j <=5){
        console.log(`${i} + ${j} = ${i + j}`);
        j++;
    }
    i++;
}



/// Do While Loop ------------------

do{
 console.log('Number ' + i);   
}while(i <= 20);