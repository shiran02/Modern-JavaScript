function getData(endPoint ,cb){
    const xhr = new XMLHttpRequest();

    xhr.open('GET',endPoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            // console.log(JSON.parse(this.responseText));
            cb(JSON.parse(this.responseText));
        }
    }

    setTimeout(()=>{
        xhr.send();
    },Math.floor(Math.random() * 3000) + 1000);
}

getData('./actors.json' ,(data)=>{
        console.log(data);
        getData('./directors.json' ,(data)=>{
            console.log(data);
            getData('./movies.json' ,(data)=>{
                console.log(data);
            });
        });
    });