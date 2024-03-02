// const user = {
//     username: "Sahil",
//     price: 999,

//     welcomeMessage : function (){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai (){
//     let username = "Sahil"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Sahil"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Sahil"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }

// console.log(addTwo(3,7))


// const addTwo = (num1, num2) =>  num1 + num2; // implicit return 
// const addTwo = (num1, num2) =>  (num1 + num2); // implicit return 

const addTwo = (num1, num2) =>  ({username: "Sahil"}) 

// console.log(addTwo(3,7))


// const myArray = [2,3,4,5,6]

// myArray.forEach(() => {})

