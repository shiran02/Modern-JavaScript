const logo = document.querySelector('img');


const onClick = ()=> console.log('Click Event'); 

// on double click --------------------------------------------
const onDoubleClick = ()=> {
    if(document.body.style.backgroundColor !== 'purple'){
        document.body.style.backgroundColor = 'purple'
        document.body.style.color = 'white'
    }else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'

    }
    console.log('double Click Event')
  //  document.body.style.backgroundColor = 'purple';
}; 

// on Right Click -----------------------------------------

const onRightClick = ()=> console.log('RightClick Event'); 

// on mouse down ------------------------------------------

const onMouseDown = ()=> console.log('Mouse Down Event'); 

// on mouse up ------------------------------------------

const onMouseUp = ()=> console.log('Mouse Down Event'); 

// on mouse wheel ------------------------------------------

const onMouseWheel = ()=> console.log('Mouse onMouseWheel Event'); 

// on mouse over ------------------------------------------

const onMouseOver = ()=> console.log('Mouse mouse over Event'); 

// on mouse out ------------------------------------------

const onMouseOut = ()=> console.log('Mouse onMouse Out Event'); 

// on onDrag Start  ------------------------------------------

const onDragStart = ()=> console.log('Mouse onDrag Start Event'); 

// on onDrag   ------------------------------------------

const onDrag = ()=> console.log('Drag  Event'); 

// on onDrag End  ------------------------------------------

const onDragEnd = ()=> console.log('Drag  End'); 


// Event listeners ---------------------------------------------------------------

logo.addEventListener('click',onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);