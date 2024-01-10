/* Webstorage API is not part of DOM
webstorage API is available in JS via global variable : window
2 types of storages exist - localStorage & sessionStorage
localStorage is persistant local storage & vice versa
webstorage & retrieval happens using JSON*/

// window.alert("Hi"); //here window is the global variable
// alert("hello"); //window need not be used

const myObj ={
    name :"bittu",
    hobbies:["eat","code","sleep"],
    logName: function(){
        console.log(this.name);
    }
};

const myArray =["eat", "code", "repeat"];
sessionStorage.setItem("mySessionStorage",JSON.stringify(myObj));
const webStorage = JSON.parse(sessionStorage.getItem("mySessionStorage"));
console.log(webStorage);



