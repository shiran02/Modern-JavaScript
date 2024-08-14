const post = {
    id : 1,
    title : 'post One',
    body : 'This is The Body',
}
console.log(post);

// convert JSON String
const str = JSON.stringify(post);

// parse Json

const obj = JSON.parse(str);


console.log(str);
console.log(obj);

//---------------------------------------------------

const posts = [
    {
        id : 1,
        title : "Post One",
        body : "This is Body",
    },
    {
        id : 2,
        title : "Post Two",
        body : "This is Body",
    }
]

// convert object To  Json string
const str2 = JSON.stringify(posts);

//onvert JSON In to Object
const obj2 = JSON.parse(str2);


console.log(obj2);
