function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');


    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}


function replaceAll(){
    const list = document.querySelectorAll('li');

    list.forEach((item,index) => {
        if(index === 1){
            
            item.innerHTML ='<li>Second </li>';
        }else{
            item.innerHTML ='<li>Replaced All</li>';
            
        }
    });
}

function replaceAll2(){
    const list = document.querySelectorAll('li');

    list.forEach((item,index)=>  index === 1 ? item.innerHTML ='<li>Second </li>' :item.innerHTML ='<li>Replaced All</li>')

}


function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'New Shopping List';
    header.replaceChild(h2,h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAll2();
replaceChildHeading();

