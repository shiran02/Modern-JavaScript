function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}


function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);   
}


function removetItem(removeItem){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${removeItem})`);
    ul.removeChild(li);
}

function removetItem2(removeItem){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[removeItem - 1];
    ul.removeChild(li);
}

//removetItem();
//removeFirstItem();
//removeClearButton();