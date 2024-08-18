const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');




function addItem(e){
  e.preventDefault();


  const newItem = itemInput.value;
  // validate Input ----------------

  if(newItem === ''){
    alert('Enter Input');
    return;
  }

  // create List Item --------------

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  // console.log(li);

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';

  console.log(itemList);

}

function createButton(classes){
  const button = document.createElement('button');
  button.className =classes;
  

  const icon = createIcon('fa-solid fa-xmark');

  button.appendChild(icon);

  return button;
}

function createIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}



// Event Listeners ----------------------------------
itemForm.addEventListener('submit',addItem);