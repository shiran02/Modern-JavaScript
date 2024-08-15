let output;

// Get child elements -----

const parent  = document.querySelector('.parent');
output = parent.children;


output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Text';
parent.children[1].style.color = 'red';


parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';
console.log(output);

// Get parent Element from a chikd ----

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '20px'



// siblings elements ----------

const secondItem = document.querySelector('clild:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'green';
 


