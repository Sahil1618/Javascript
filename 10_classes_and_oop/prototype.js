// let myName = "Sahil     "
// let mySirName = "Sharma     "
// // console.log(myName.trim().length);
// console.log(myName.truelength);

// let myHeroes = ["thor", "Spiderman"]
// let heroPower = {
//     thor: "Hammer",
//     Spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy Power is ${this.Spiderman}`);
//     }
// }
// Object.prototype.sahil= function(){
//     console.log("sahil is present in all Objects");
// }
// Array.prototype.heySahil = function(){
//     console.log("Hello");
// }
// // heroPower.sahil()
// myHeroes.sahil()
// myHeroes.heySahil()
// heroPower.heysahil()



// Inheritance

const user = {
    name: "chai",
    email: "chai@example.com"

}
const teacher = {
    makevideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax 
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "test       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

