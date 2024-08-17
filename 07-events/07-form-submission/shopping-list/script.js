const form = document.getElementById('item-form');


function onSubmit(e){
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if(item ==='' || priority ==='0'){
        alert('Please fill in All Fields');
        return;
    }

    console.log(item,priority);
}



function onSubmit2(e){
    e.preventDefault();
    const formData = new FormData(form);
    // console.log(formData);

    const item = formData.get('item');
    const priority = formData.get('priority');
    console.log(item , priority);
}

function onSubmit3(e){
    e.preventDefault();
    const formData = new FormData(form);
    // console.log(formData);

    const entries = formData.entries();
    
    for(let entry of entries){
        console.log(entry);
    }
    
}



// form.addEventListener('submit',onSubmit);
form.addEventListener('submit',onSubmit3);