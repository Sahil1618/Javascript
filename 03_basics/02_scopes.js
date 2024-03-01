// var c = 300
let a = 300
if(true){ // block scope inside if block
    let a = 10
    const b = 20
    // console.log(`Inner : ${a}`)
}


// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = " Sahil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // scope finished here

    two()
}
// one()

if (true) {
    const username = "Sahil"
    if(username === "Sahil"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
} 
// console.log(username);


// ++++++++++++++++++++++++++++
  
addOne(4)

function addOne(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}

addTwo(5)












