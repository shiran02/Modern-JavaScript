const apiUrl = "https://jsonplaceholder.typicode.com/todos";


const getTodos = ()=>{
    fetch(apiUrl +'?_limit=10')
    .then((res)=> res.json())
    .then((data)=>data.forEach((todo)=>
        addToDoToDom(todo)
    ));
}

const addToDoToDom = (todo)=>{
    
        const div =document.createElement('div');
        div.appendChild(document.createTextNode(todo.title));
        div.setAttribute('data-id',todo.id);

        if(todo.completed){
            div.classList.add('done');
        }

        document.getElementById('todo-list').appendChild(div);
  
}

const createTodo = (e)=>{

    e.preventDefault();

    const newToDo = {
        title : e.target.firstElementChild.value,
        completed :false,
    }

    fetch(apiUrl,{
        method:'POST',
        body:JSON.stringify(newToDo),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data =>addToDoToDom(data))
}

const deleteTodo = (e)=>{
    if(e.target.classList.contains('todo')){
        
        const id = e.target.dataset.id;
        console.log(id);
        fetch(`${apiUrl}/${id}`,{
            method:'DELETE',
        })
        .then((res)=> res.json())
        .then(()=>e.target.remove());
    }
}

const toggleCompleted=(e)=>{
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id , e.target.classList.contains('done'));
}

const updateTodo = (id,completed)=>{
    console.log(id,completed);
    fetch(`${apiUrl}/${id}`,{
        method:'PUT',
        body:JSON.stringify({completed}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    });
}


const init =() =>{
    document.addEventListener('DOMContentLoaded',getTodos);
    document.querySelector('#todo-form').addEventListener('submit',createTodo);
    document.querySelector('#todo-list').addEventListener('click',toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick',deleteTodo);
}

init();
