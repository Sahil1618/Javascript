const marvelHeroes = ["ironman", "hulk", "spiderman"];
const dcHeroes = ["superman", "batman", "flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes] // spread operator
// console.log(allNewHeroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log((Array.isArray("sahil"))) // false
// console.log(Array.from("Sahil")) // [ 'S', 'a', 'h', 'i', 'l' ]
// console.log(Array.from({name: "Sahil"})) // interesting -> returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converts values into array








