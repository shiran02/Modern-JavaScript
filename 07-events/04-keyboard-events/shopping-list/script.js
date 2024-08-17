const itemInput = document.getElementById('item-input');

const onKeyPress = (e)=>{
    console.log('KeyPress');
}

const onKeyUp = (e)=>{
    console.log('KeyPress');
}

const onKeyDawn = (e)=>{
    console.log('KeyDawn');
}

const onKeyDawn2 = (e)=>{
    //document.querySelector('h1').innerText = e.key;

    // key ----------------------------
    if(e.key == 'Enter'){
        alert('You pressed Enter');
    }

    // key code -----------------------

    if(e.keyCode == 13){
        alert('You Pressed Enter');
    }

    // code ---------------------------

    if(e.code === 'Digit1'){
        console.log('You pressed 1');
    }
    if(e.repeat){
        console.log('You are holding down ' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if(e.shiftKey && e.key === 'K'){
        console.log('You Hit shift + K');
    }
}


//itemInput.addEventListener('keypress',onKeyPress);
//itemInput.addEventListener('keyup',onKeyUp);
//itemInput.addEventListener('keydown',onKeyDawn);
itemInput.addEventListener('keydown',onKeyDawn2);