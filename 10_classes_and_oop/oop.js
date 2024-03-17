
const user = {
    username: "Sahil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = new User("Sahil", 12, true)
const userTwo = new User("Chai aur Code", 11, false)
console.log(userTwo instanceof User);
// console.log(userTwo);
