

//

(function(){
    const user = 'shiran';
    console.log(user);
    const hello = ()=>{
        console.log('Hello');
    }
    hello();
})();

// ()() ----------

//---------------------------------
(function(name = 'User'){
    console.log('Hello ' + name);
})();

//----------------------------------

(function(name = 'User'){
    console.log('Hello ' + name);
})('shiran');

