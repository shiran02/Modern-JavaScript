const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clearBtn = document.getElementById('clear');

const itemFilter = document.getElementById('filter');



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

  // Add Li to The DOM 
  itemList.appendChild(li);

  itemInput.value = '';

  

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

function removeItem(e){
  console.log(e.target.parentElement.classList);
  if(e.target.parentElement.classList.contains('remove-item')){
    console.log('click');

    if(confirm('Are You Sure?')){
      // icon -> button -> listItem 
      e.target.parentElement.parentElement.remove();
    checkUi();
    }

    
  }
  //e.target.parentElement.remove()
}

function clearItem(e){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener('click',clearItem);

function checkUi(){
  const items = itemList.querySelectorAll('li');

  console.log(items);

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listeners ----------------------------------
itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

checkUi();