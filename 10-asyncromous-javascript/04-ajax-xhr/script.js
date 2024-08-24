// initial Xhr

const xhr = new XMLHttpRequest();

xhr.open('GET','./movies.json');

/*

readyState has 5 possible values
0 - request not initialized
1 - server connection established
2 - processing request
3 - processing request
4 - request finished and response is ready

*/

xhr.onreadystatechange = function(){
  console.log(this.readyState);

  if(this.readyState ===4 && this.status === 200){
    //Converts a JavaScript Object Notation (JSON) string into an object.
    //JSON.parse()

    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((movie)=>{
        const li  = document.createElement('li');
        li.innerHTML = `<Strong> ${movie.title}</strong> - ${movie.year}` ;
        document.querySelector('#results').append(li);
    });
  }
}


xhr.send();