//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
// ------------- from Sebastian's Blog:

/*var alian = {
    kind: 'alian'
}

var human = {
    kind: 'human'
}

var person = {};

person.prototype = alian;

console.log(person.prototype);

person.prototype = human;

console.log(person.prototype); */

// ------------- my take:

var Cars = { brand: ['Volvo', 'Renault', 'Ferrari', 'Fiat'] };

var MyCar = {};

MyCar.prototype = Cars.brand[1];

console.log(MyCar.prototype);



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [];

for (var i = 0; i < 10; i++) {
    myNumbers[i] = i+1;
}

//console.log(myNumbers);

var mySlice = myNumbers.slice(5-1, 6-1);

console.log(mySlice);



//3. Delete the last number in the array that you created above.

myNumbers.pop();

console.log(myNumbers);



//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var p = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

var words = [/strawberry/gi, /strawberries/gi];
var newWords = ['banana', 'bananas'];

var newString = p.replace(words[0], newWords[0]);
newString = newString.replace(words[1], newWords[1]);

console.log(newString);



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myArray = ['TIL', 'RBK', 'Brann', 'Bodø Glimt'];
myArray.splice(0, 4);
myArray.push('Ford', 'Renault', 'Toyota', 'Kia');
console.log(myArray);



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var arrayOfPeople = [
    {name: 'Ola'},
    {name: 'Kari'},
    {name: 'Per'},
    {name: 'Paal'}
]

//console.log(arrayOfPeople);

function filterByName(theArray) {
    return theArray.name === 'Ola';
}

var filteredArray = arrayOfPeople.filter(filterByName);

console.log(filteredArray);

// ---------- testing ----------
/*var testArray = [1,2,3,4,5,6,7,8,9];

var result = testArray.filter(function(val){
    return val < 5;
})

console.log(result);*/



//7. Create a simple function that logs the date.

function logDate() {
    var currentDate = new Date();
    console.log(currentDate);
}

logDate();