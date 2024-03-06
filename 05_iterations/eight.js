const myNums = [1, 2, 3, 4]

const mytotal = myNums.reduce( function(acc, curval) {
    console.log(`acc: ${acc} and curval ${curval}`);
    return acc + curval 
}, 0 )

console.log(mytotal);