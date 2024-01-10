//JSON JavaScript Object Notation
/* 
JSON is used to send and receive data
JSON is a text format that is language independent
Meaning JSON is used to send and receive data in many languages
...not just in JavaScript
*/
const myObj = {
    name : "Srikanth",
    hobbies : ["eat", "sleep" , "code"],
    hello : function(){
        return "Hello World !"
    }
}
console.log(myObj.name);
console.log(myObj.hobbies);
console.log(myObj.hello());

const sendJSON = JSON.stringify(myObj); // converts myObj from object to a string.
console.log(sendJSON); // o/p does not have hello method. meaning it is lost in conversion.
console.log(typeof sendJSON); // o/p string.

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON); // returns object which is converted back from JSON string