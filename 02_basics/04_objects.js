const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "sahil@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Sahil",
            lastname: " Sharma"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: ins} = course



// console.log(courseInstructor);
// console.log(ins);


// const navbar = ({company}) => { // destructuring in react

// }

// navbar(company = "Hitesh")

// {
//     "name": "sahil",
//     "coursename": "Js in Hindi",
//     "price": "999"

// }

[
    {},
    {},
    {}
]
    
















