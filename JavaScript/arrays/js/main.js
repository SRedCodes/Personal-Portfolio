const myArray = []; // declaration of array

//adding values to array

myArray[0]="sri";
myArray[1]= 123;
myArray[2]= false;
myArray[3]="kanth";
console.log(myArray);

console.log(myArray.length);

//adding values to array
let newLength = myArray.push("reddy"); // adds new element to end of array
console.log(myArray)
console.log(newLength); // return value of push is array length
 newLength = myArray.unshift("bittu");
console.log(myArray); //adds new element to start of array
console.log(newLength); // return value of unshift is array length

//removing values from array
myArray.pop(); // removes element from end of the array
console.log(myArray);
myArray.shift(); // removes element from start of the array
console.log(myArray);

//deleting & replacing values from array
myArray.splice(1 , 1);
console.log(myArray);

//New Array
let myNewArray = ["A","B","C","D", "E", "F"];
let myNew = myNewArray.slice(1,4); // slices from pos. 1 to pos. 3 and gives as o/p.
console.log(myNew);
myNewArray.reverse(); // reverses an array
console.log(myNewArray);

//combining 2 arrays
let myNewArrayOne = ["A","B","C"];
let myNewArrayTwo = ["D","E","F"];
const myNewString=myNewArray.join();
console.log(myNewString);
console.log(myNewString.split(","));

const myNewArr = myNewArrayOne.concat(myNewArrayTwo);
console.log(myNewArr);

const newArr = [...myNewArrayOne , ...myNewArrayTwo];
console.log(newArr);



