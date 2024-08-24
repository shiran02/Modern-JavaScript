// fetch('http://httpstat.us/200')
//     .then((response)=>{
//         return response;
//     })
//     .then(()=>{
//         console.log('sucess');
//     })


// Test With response.ok ------------------------

// fetch('http://httpstat.us/404')
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error('Request Failed');
//         }
//         return response;
//     })
//     .then(()=>{
//         console.log('sucess');
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// check for specific code -------------

fetch('http://httpstat.us/500')
    .then((response)=>{
        if(!response.status == 404){
            throw new Error('Request Failed');
        }else if(!response.status == 500){
            throw new Error('Server error');
        }else if(!response.status !== 200){
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(()=>{
        console.log('sucess');
    })
    .catch((error)=>{
        console.log(error);
    });


// fetch('http://httpstat.us/404')
//     .then((response)=>{
//         return response;
//     })
//     .then(()=>{
//         console.log('sucess');
//     })
//     .catch((error)=>{
//         console.log(error);
//     });