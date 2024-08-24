// create a promises ---------------

// const promise = new Promise((resolve,reject)=>{
//     // Do some async task
//     setTimeout(()=>{
//         console.log('Async task complete');
//         resolve();
//     },1000);
// });

// promise.then(()=>{
//     console.log('Promise consumed');
// });



const getUser = new Promise((resolve,reject)=>{
    // Do some async task
    setTimeout(()=>{
        
        let error = false;

        if(!error){
            resolve({name :'Shiran',age : 30});
        }else{
            reject('Error : Some thing went Wrong');
        }
        
    },1000);
});


getUser.then((user)=> console.log(user))
.catch((error)=> console.log(error))
.finally(()=>console.log('The promise has been resolved or rejected'));


console.log('Hello From Global scope');