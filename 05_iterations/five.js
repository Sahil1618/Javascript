const coding = ["js", "ruby", "java", "python", "cpp"]


// continue 29th lecture from 23 min
// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [ 
    {
        languageName: "Javascript",
        fileName: "js",
    },
    {
        languageName: "Java",
        fileName: "java",
    },
    {
        languageName: "Python",
        fileName: "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )







