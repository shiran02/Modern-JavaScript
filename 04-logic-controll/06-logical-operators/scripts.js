//  && will return first falsy or the last value

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 20;


console.log(a);


const posts = ['Posts' , 'Post Two'];

posts.lenght > 0 && console.log(postsp[0]);

//  ||  will return first truthy value  or the last truthy value


