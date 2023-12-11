// captureState=confirm("OK===True\nCancel=== false");
// console.log(captureState);
// alert("This is an alert Message");
let name = prompt("enter your Name here:");
if(name){  
    console.log(name.length);  
    console.log(name.trim().length);
    console.log(name.trim());
}
else{
    console.log("you did not enter your name");
}