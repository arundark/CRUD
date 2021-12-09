const url = "https://61aedaa52cdd900017407625.mockapi.io/users"

function getUsers(){
    fetch(url, {
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        }
    }).then(response => response.json())
    .then(data => console.log(data))
}

//getUsers();

function createUser(){
    let data ={
        name: 'arun',
        email: '123@tv.com'
    }
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// createUser();


function updateUser(){
    let data ={
        name: 'john',
        email: '123@tv.com'
    }
    fetch(url+'/1',{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// updateUser();


function deleteUser(){
    fetch(url+'/2',{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json",
        }
    }).then(res =>res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

//deleteUser()