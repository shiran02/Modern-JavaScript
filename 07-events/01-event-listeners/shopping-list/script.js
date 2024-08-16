const clearBtn = document.querySelector('#clear');

// function onClear(){
//     alert('Clear Item')
// }

// first way ---------------------
// function onClear(){
//     const itemList = document.querySelector('ul');
//     itemList.innerHTML = '';
// }

// second way -----------------------
function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => item.remove());
}

// third way ------------------------




// Javascript Event Listner ----------------

// clearBtn.onclick = function(){
//     alert('Clear Item')
// }

// addEventListener -------------------------


// clearBtn.addEventListener('click',function(){
//     alert('Clear Item');
// });

clearBtn.addEventListener('click',onClear);


//setTimeout( ()=>clearBtn.removeEventListener('click',onClear),5000);
setTimeout( ()=>clearBtn.click(),5000);