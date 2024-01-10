/*Higher order functions

Higher order Function is a function that does atleast one of the following:
1. take one or more functions as arguments or
2. returns a function as the result or
3. does both.*/

import { posts } from "./posts.js";

//forEach
posts.forEach((post)=>{
    console.log(post);
})
console.clear();

//filter
const filteredPosts = posts.filter((post)=>{
    return post.userId === 1 ;
})
console.log(filteredPosts);

//map
const mappedPosts = filteredPosts.map((post)=>{
    return post.id * 10 ;
})
console.log(mappedPosts);

//reduce
const reducedPosts = mappedPosts.reduce((sum,post)=>{
    return sum + post;
})
console.log(reducedPosts);