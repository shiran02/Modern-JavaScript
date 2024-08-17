const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    console.log(e.target.value);
    heading.textContent = e.target.value;
}

function onChecked(e){
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not';
}

function onFocus(){
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}


function onBlur(){
    console.log('Input is Not focused');
    itemInput.style.outlineStyle = 'none';
}


itemInput.addEventListener('input',onInput);
priorityInput.addEventListener('input',onInput);
itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);