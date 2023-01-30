// Square an array of numbers
const nums = [1,2,3,4,5]

const squared = nums.map(num => num * num)
console.log(squared)

// Capitalize an array of strings

const names = ["alice", "bob", "charlie", "danielle"] 

// Capitalizing the first letter and then slicing the rest of the string
const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(capitalized)

// Challenge number 3 
const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]

const challenge3 = pokemons.map(pokemon => `<p>${pokemon}</p>`)
console.log(challenge3)


