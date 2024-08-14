const x = 100;


console.log(x , 'in Global');


function run(){
    console.log(x , 'X in Function');
}


function add(){
    const x = 1;
    const y = 50;
    console.log(x + y);
}
