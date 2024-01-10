// // Fetch API requires dicussion of...
// // callbacks, Promises, Thenables , Async , Await

// /* Nature of Javascript 
// Synchronous - line by line execution of code , can perform only 1 task at a time , single threaded
// Asynchronous - different blocks of code is executed at the same time parallely, multi threaded, this is achieved using { Promises , Thenables } --> later replaced by {Async & Await} 

// much before promises callbacks where used .. branching multiple callbacks inside one another made i hard to follow the code known as callback hell --> to prevent this in ES6 Promises where introduced which where later replaced by Async & await */

// /* How does a Promise work ?
// a Promise has 3 States : Pending , Fulfilled , Rejected
// a Promise is an object that will produce a single value sometime in future. If the promise is successfull it'll produce a resolved value else a rejected value.*/

// /*Promise constructor accept a single parameter which is a function called executor that has 2 paramenters resolve, reject -
// Syntax :
// const myPromise = new Promise((resolve,reject)=>{
//     //conditions to resolve or reject a promise
// }) 
// here Again resolve & reject are functions which have optional parameter like resolve value & rejected reason respectively.
// */

// const myPromise = new Promise((resolve , reject)=>{
//     const num = Math.random();
//     if(num>0.5){
//         return resolve("Promise Resolved");
//     }else{
//         return reject("Promise Rejected");
//     }
// })

// /* a Thenable is used to chain a callback when a promise is executed this is done using :
// myPromise.then((on_fullfilled) , (on_Rejection))
// the (on_fullfilled) is a anon function executed when promise is resolved &
// the (on_Rejection) is a anon function executed when promise is rejected */

// myPromise
// .then( (val) => {return (val + 1);}  ,  (reason) => {return (reason);} )
// /* the above .then value is returned and passed to next .then as newVal */

// .then((newVal) => {console.log(newVal);}  ,  (reason) => {console.log(reason);})


/* similarly the same can be executed using .catch() for Rejected promises as shown below: */
// myPromise
// .then((val)=>{
//     return val + 1 ;
// })
// .then((newVal)=>{
//     console.log(newVal);
// })
// .catch((err)=>{ // catches rejected state of all the promises and gives o/p
//     console.error(err);
// })

// const myNewPromise = new Promise((resolve , reject)=>{
//     const name = true;
//     if(name){
//         resolve("My New Promise Resolved");
//     }else{
//         reject("Promise Rejected");
//     }
// })
// const myNextNewPromise = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Yes ! My NextNewPromise Resolved");
//     },3000)
// })
// // SetTimeOut(function() , timeout in ms);

// myNextNewPromise.then((val)=>{
//     console.log(val);
// })
// myNewPromise.then((val)=>{
//     console.log(val);
// })



/* Ice Cream Shop using promises */

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let is_shop_open = false;

// let order = (time , work)=>{

//     return new Promise ( ( resolve , reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time);
//         }
//         else{
//             reject(console.log("our shop is closed"));
//         }

//     })

// }
// order(2000,()=>{console.log(`${stocks.Fruits[0]} was Selected`)})
// .then(()=>{
//     return order(0,()=> console.log("Production has started"));
// })

// .then(()=>{
//     return order(2000,()=>console.log("the Fruits are chopped"));
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`));
// })
// .then(()=>{
//     return order(1000,()=>console.log("start the machine"));
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Icecream was placed in ${stocks.holder[0]}`));
// })
// .then(()=>{
//     return order(3000,()=>console.log(`${stocks.toppings[0]} was Selected`));
// })
// .then(()=>{
//     return order(1000, ()=>console.log("Icecream was Served"))
// })
// .catch(()=> console.log("Customer Left !"))
// .finally(()=>{
//     console.log("Day ended ! Shop is Closed");
// })

/*Fetch API -> requires us to read website API document to know what to supply along with url to get required response*/

// const users = fetch("https://jsonplaceholder.typicode.com/users") // fetch returns a promise to fetch data from src url
// .then(response=>{
//     return response.json(); // .json() alos return a promise for parsing JSON mixon response Rx from fetch 
// })
// .then(usersData=>{
//     usersData.forEach(user=> {
//        console.log(user); 
//     });
// })

// /*Fetch API using Async, await
// fetch() & .json() are 2 functions that return a promise implicitly ... await works like .then it wait for a promise to complete and then performs an action.*/

// const dataBase = {
//     userList : [],
// }
// const myFunction = async () =>{
//     const dataStream = await fetch("https://jsonplaceholder.typicode.com/users"); // await = wait for
//     const userData = await dataStream.json();
//     console.log(userData);
//     return userData
// }
// const myFuncTwo = async ()=>{
//     const data = await myFunction();
//     dataBase.userList = data ;
//     console.log(dataBase.userList);
// }
// myFuncTwo();

const getDadJokes = async () => {
    const jokeStream = await fetch("https://icanhazdadjoke.com/", {
        method:"GET",
        headers:{
            Accept: "application/json" // tells API the kind of data we expect to Rx.
        }
    });
    const jsonJokeData = await jokeStream.json();
    console.log(jsonJokeData);
}
getDadJokes();

const dadJoke = {
    id: "5T08U8M79pb",
    joke: "Never take advice from electrons. They are always negative.",
}
/*Note : Read the document on API provided by the required site to know what do they expect in url(as part of fetch) that you should specify to get the response you want */
const postDadJoke = async (joke) =>{
    const dadJokeStream = await fetch("https://httpbin.org/post",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body: JSON.stringify(dadJoke),
    });
    const jsonResponse = await dadJokeStream.json();

    console.log(jsonResponse.headers);
}

postDadJoke(dadJoke);