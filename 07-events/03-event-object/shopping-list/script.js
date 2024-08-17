const logo = document.querySelector('img');

function onclick(e){
    // console.log(e)
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.pageY);
    // console.log(e.pageX);
    // console.log(e.screenX);
    // console.log(e.screenY);
  // e.target.style.backgroundColor = 'black'
}

// logo.addEventListener('click',function (e){
//     console.log(e);
// });


function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
    console.log('Link Was Clikc');
});


logo.addEventListener('drag',onDrag);

document.body.addEventListener('click',function(e){
    // console.log(e.target);
    // console.log(e.currentTarget);
});

logo.addEventListener('click',onclick)