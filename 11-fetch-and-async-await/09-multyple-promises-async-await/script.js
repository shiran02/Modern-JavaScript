function getData(endPoint){

    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

    xhr.open('GET',endPoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                resolve(this.responseText);
            }else{
                reject('Some thing went wrong');
            }
                
        }
    };

    setTimeout(()=>{
        xhr.send();
    },Math.floor(Math.random() * 3000) + 1000);
    });
    
}

// getData('./actors.json').then((actors)=>{
//     console.log(actors);
//     return getData('./directors.json');
// }).then((directors)=>{
//     console.log(directors)
//     return getData('./movies.json');
// }).then((movies)=>{
//     return getData('./movies.json');
//     console.log(movies)
// })


async function getAllData(){
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    const movies = await getData('./movies.json');
    console.log(movies);
} 

getAllData();
