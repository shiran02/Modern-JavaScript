function fetchUser(){
    showSpinner();
    fetch('https://randomuser.me/api')
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        holdSpinner();
        console.log(data);
        display(data)
    });
}


function display(user){
    const userDisplay = document.querySelector('#user');
    if(user.gender === 'female'){
        document.body.style.background = 'rebeccapurple';
    }else{
        document.body.style.background = 'steelblue';
    }

    userDisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>`;
 
}

function showSpinner(){
    document.querySelector('.spinner').style.display = 'block';
}

function holdSpinner(){
    document.querySelector('.spinner').style.display = 'none';
}


document.querySelector('#generate').addEventListener('click',fetchUser);

