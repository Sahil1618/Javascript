// for of 

// [{},{},{}] 

const arr = [1,2,3,4,5]

for( const num of arr){
    // console.log(num);
}

// maps  

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ": ", value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}

// for (const [key,value] of myObj) { // not iteratable
//     console.log(key, ":", value);
// }

