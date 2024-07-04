console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const brii = {
  height: 'Five foot one inch',
  hair: 'curly dark blonde',
  age: 36
  // TODO - add properties here
};
console.log('A little about me:', brii);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = {
  firstName: 'Brii',
  lastName: 'SwordLegz'
};
console.log('My name is:', fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let faveFoods = [
  {
    name: 'Swedish Fish',
    type: 'candy'
  },
  {
    name: 'Mac and Cheese',
    type: 'pasta',
  },
  {
    name: 'Chicken Nuggest',
    type: 'meat'
  },
  {
    name: 'PBJ',
    type: 'sandwich'
  }];
  console.log(faveFoods[1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
let shoes = {
  pairs: 15
}
console.log(shoes);
shoes.pairs = 16;
console.log(shoes);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

brii.favoriteColor = 'purple';
console.log(brii);
