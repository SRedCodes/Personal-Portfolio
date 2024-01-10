// Fetch API requires dicussion of...
// callbacks, Promises, Thenables , Async , Await

/* Nature of Javascript 
Synchronous - line by line execution of code , can perform only 1 task at a time , single threaded
Asynchronous - different blocks of code is executed at the same time parallely, multi threaded, this is achieved using { Promises , Thenables } --> later replaced by {Async & Await} 

much before promises callbacks where used .. branching multiple callbacks inside one another made i hard to follow the code known as callback hell --> to prevent this in ES6 Promises where introduced which where later replaced by Async & await */

/* How does a Promise work ?
a Promise has 3 States : Pending , Fulfilled , Rejected
a Promise is an object that will produce a single value sometime in future. If the promise is successfull it'll produce a resolved value else a rejected value.*/

/*Promise constructor accept a single parameter which is a function called executor that has 2 paramenters resolve, reject -
Syntax :
const myPromise = new Promise((resolve,reject)=>{
    //conditions to resolve or reject a promise
}) 
here Again resolve & reject are functions which have optional parameter like resolve value & rejected reason respectively.
*/

// const getUserEmail = async ()=>{
//     const userData = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userDataRefined = await userData.json();
//     const userEmails = userDataRefined.map(user =>{
//         return user.email;
//     })
    
//     postUserEmails(userEmails);
// }

// const postUserEmails = (data)=>{
//     console.log(data);
// }
// getUserEmail();


/* 2nd Parameter of Fetch */

const makeJoke = async (category)=>{
    const getJoke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const parseJoke = await getJoke.json();
    console.log(parseJoke.value);
}

makeJoke("religion");