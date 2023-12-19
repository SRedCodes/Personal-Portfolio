"use strict";
// Object..create(); // this is a SyntaxError

const makeError = ()=>{
    try{ // tries to excute code inside the try block and if found error , it'll be passed as parameter to catch
    // const name = "srikanth";
    // name = "bittu"; //  this is a TypeError as const cannot be reassigned.
    throw new error("This is an error Message"); // throws a custom error

    }catch (er){ // catches error from try block and displayes it
        console.log(er);
        console.error(er); // shows up in red background
        console.table(er); // shows up as table witg key-value pairs
        console.log(er.name); // provides name of the type of error like TypeError
        console.log(er.message); // provides explanation for the type of Error
        console.log(er.stack); // provides name + message
        // stack = name + message ... these are predefined parts for Error in JS
    } finally{
        console.log("...finally")
    }
}
makeError();
function error(message){
    this.message = message
    this.name = "myError" ,
    this.stack = `${this.name} : ${this.message}`

}

//How does Try catch Finally block work with Example

let i = 1;
while(i<=5){
    try{
        if(i%2 != 0){
            throw new Error("this is not an Even Number !");
            console.log("This is not reachable"); // after an error is thrown anything below that is not executed in a try block and it'll move straight to catch block
        }
        console.log(`${i} is a Even Number !`) // this is not executed when an error ius thrown
    }catch(error){
        console.error(error.stack);
    }finally{ // finally Block is executed everytime no matter what
        console.log(`${i} ...Finally`);
        i++;
    }
}