const accountId = 12345 // to declare constants, whose values cannot be changed
let accountEmail = "sahil@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "test@gmail.com"
accountPassword = "1111"
accountCity = "Delhi"

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountState);
// console.table([accountId, accountEmail, accountPassword, accountCity])


// console.log(accountId);

