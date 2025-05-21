// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // Returns 100 100

age = 200;
console.log(age, age2); // Returns 200 100

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:
console.log(team, players); //team is not a copy of the array but a reference to the original array

//When you update that array the problem is you have edited the original array too.
//That is an array reference, not an array copy. They both point to the same array.

// Take a copy instead
const team2 = players.slice();
team2[2] = "Farah";
console.log(team2, players); // updated, not updated
// one way

// Create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3);
team3[3] = "Betty";
console.log(team3, players); // updated, not updated

// Use the ES6 Spread
const team4 = [...players];
console.log(team4);
team4[0] = "Angela";
console.log(team4, players); // updated, not updated

const team5 = Array.from(players);
console.log(team5);
// Now when you update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Betty White",
  age: 49,
};
// and think we make a copy:
const captain = person;
captain.age = 77;
console.log(captain, person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 88 });
console.log(cap2, person); // updated, not updated

// Object ...spread
const cap3 = { ...person };
cap3.age = 33;
console.log(cap3, person); // updated, not updated

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
