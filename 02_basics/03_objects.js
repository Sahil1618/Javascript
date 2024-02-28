// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sahil",
    "full name": "Sahil Sharma", // can't access full name by any method now 
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "sahilkohli1618@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}
// console.log(jsUser.location)
// console.log(jsUser["location"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym]) // string
// console.log(jsUser[mySym]) // myKey1

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greeting) // undefined
console.log(jsUser.greeting2()) // undefined


















