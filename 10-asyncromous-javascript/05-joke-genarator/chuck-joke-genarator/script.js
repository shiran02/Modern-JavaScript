const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

function genarateJoke(){
    console.log('Genarate JOke');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random');


    xhr.onreadystatechange = function(){
        if(this.readyState === 4 ){
            if(this.status === 200){

                jokeEl.innerHTML = JSON.parse(this.responseText).value
                
                
            }else{
                jokeEl.innerHTML = "Something Went Wrong (Not Funny)";
            }
        }
    }

    xhr.send();
    
}


jokeBtn.addEventListener('click',genarateJoke);