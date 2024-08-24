const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
    });
});


promise.then((user)=>{
    console.log(user);
    return user.name
}).then((name)=>{
    console.log(name);
    return name.length
}).then((length)=>{
    console.log(length);
}).catch((error)=>{
    console.log(error);
    return 123;
}).then((x)=>console.log('This will run no matter what', x));