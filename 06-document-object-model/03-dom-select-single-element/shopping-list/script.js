// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className='hello');
console.log(document.getElementById('app-title').getAttribute('id'));

/// set Attributes -----------
document.getElementById('app-title').title = 'Shopping';
document.getElementById('app-title').setAttribute('class','title');


const title = document.getElementById('app-title');


//  Get or change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong> Shopping List</strong>'


// change style

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';



// documnet.querySelector()

console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));


console.log(document.querySelector('li:nth-child(2)').innerText);
console.log(document.querySelector('li:nth-child(3)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = "Banana"
secondItem.style.color = 'red'

// use these method on other elements

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';