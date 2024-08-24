// const intervalID = setInterval(myCallback,1000,'Hello');


// function myCallback(e){
//     console.log(e,Date.now());
// }


let intervalID;

function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor,1000);
    }
}


function changeRandomColor(){
    const randomColor = Math.floor(Math.random() * 16345).toString(12);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalID);
  }

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
