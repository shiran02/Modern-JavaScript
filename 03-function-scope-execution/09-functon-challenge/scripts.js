// challenge 1 ------------

const  getCelsius = (f) =>  (f - 32) * 5/9 


console.log(`The Temperature is ${getCelsius(32) } \xB0C`)


//challenge 2 ----------



function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`Min Value Is ${min}`);
    console.log(`Min Value Is ${max}`);
}



console.log(minMax([1,2,3,4,5,23,2,12,4,54,5,2]));




// challenge 3 -----------


(function (width , height){
    area = ()=>{
        console.log(`Area Is ${width * height}`);
    }

    const ar = function(){
        console.log(`Area Is ${width * height}`);
    }
    ar();
})(10,2); 