const getUser = async ()=>{

  try{
    const response = await fetch('http://httpstat.us/500');

    if(!response.ok){
      throw new Error('Request Faild');
    }


    const data = response.text();
    console.log(error);
  }catch(error){
    console.log(error);
  }
  
}

const getPosts = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('http://httpstat.us/500');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();

  console.log(data);
};


// getUsers();
getPosts().catch((error) => console.log(error));