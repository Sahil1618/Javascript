const myNums = [1, 2, 3, 4]

// const mytotal = myNums.reduce( function(acc, curval) {
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval 
// }, 0 )

const mytotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(mytotal);

const shoppingcart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile Dev",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
]

const priceToPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
