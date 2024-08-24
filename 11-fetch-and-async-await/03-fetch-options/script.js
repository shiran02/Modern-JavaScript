function createPost({title,body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',


        ///----
        // object in to Json format
        // body:JSON.stringify({
        //     title : post.title,
        //     body:post.body,
        // }),

        body:JSON.stringify({
            title,
            body,
        }),
        //JSON.stringify is a method in JavaScript used to convert a JavaScript object or value into a JSON string. 
        // object in to Json format
        headers:{
            'Content-type':'application/json',
            'token':'abc123',
        },
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data));
}


createPost({
    title:'My Post',
    body :'This is My Post',
})