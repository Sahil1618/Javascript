


// const promiseOne = new Promise(function(resolve, reject){

//     // do an async task
//     // DB calls , cryptography
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 100)

// })

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })


// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Sahil" , email: "sahil@example.com"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promise4.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("Promise is either solved or rejected"))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "JS" , password: "123"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive (){
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }

// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{ console.log(data)})
.catch((error) =>{console.log("Error")})


