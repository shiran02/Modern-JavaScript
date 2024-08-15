/// Falsy Values ----------


/*

1. false
2. 0
3. " " or '' (Empty String)
4. null
5. undefined
6. NaN

*/

/// Truthy Values -------------

/*

1. EveryThing else that is Not Truthy
2. true
3. '0' ( 0 in String)
4. '' (space)
5. 'false' (false in a String)
6. [] (empty Array)
7. {} (empty Object)
8. function (){} (empty Function) 

*/


const childeren = 0;


if(!isNaN(childeren)){
    console.log(`You Have ${childeren} children`);
}else{
    console.log(`please Eneter Number f Childeren`);
}


// check empty Erra --
const post = [];

if(post.length > 0){
    console.log(`List Post`);
}else{
    console.log(`No Posts To List`);
}

// checking empty Object -----------


const user = {
    name : 'Brand',
}


if(Object.keys(user).length > 0){
    console.log('List User');
}else{
    console.log('no User');
}

// Loose Equality (==)