function sayMyName (){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}

const result = addTwoNumbers(3,5)
// console.log("Result : ",result)


function loginUserMsg (username = "Sam"){ // sam will be returned if no value is passed in the  function call below
    if (username === undefined) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Sahil"))
// console.log(loginUserMsg("Sahil")) // sahil will override sam above


function calculateCartPrice (val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600))

const user = {
    username: "Sahil",
    price: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})


const myNewArray = [2,4,6,8,10]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))


