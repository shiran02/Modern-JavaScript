// querySelectorAll()


/*
const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);
console.log(listItems[2].innerText);
console.log(listItems[1].innerText);

listItems[1].style.color = 'red';

listItems.forEach((item)=>item.style.color ='red')



listItems.forEach((item , index)=>{
    
    item.style.color ='red'

    if(index === 0){
        item.innerHTML = `
    Banaba
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
    `;
    }
    
        
})

*/


// using Class Name ------------------

const listItem2 = document.getElementsByClassName('item');

console.log(listItem2);


const listItemsArray = Array.from(listItem2);

console.log(listItemsArray);

listItemsArray.forEach((item)=>{
    console.log(item.innerText);
})


// Using Tag Names ------------------------------

const listItem3 = document.getElementsByTagName('li');

console.log(listItem3);