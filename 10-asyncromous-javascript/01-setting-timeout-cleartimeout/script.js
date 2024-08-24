function changeText(){
  document.querySelector('h1').textContent = 'Hello From Call Back';
}

const timerId = setTimeout(changeText,3000);


document.querySelector('#cancel').addEventListener('click',()=>{
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});