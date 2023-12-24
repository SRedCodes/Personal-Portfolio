/*Event Listeners
an eventListener is a functions that performs some action upon occuring of an event
some common evenlisteners are:
click:
mouseover:
mouseout:
submit:
change: etc..*/

//selecting a view//
const view = document.querySelector("#view2");
const view1 = document.querySelector("#view1");
const view3 = document.querySelector("#view3");
view1.style.display= "none";
view.style.display ="none";
view3.style.display = "flex";

// // pushing HTMLElementNodes into objects using querySelector
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// // syntax : addEventListener("event",function,useCapture)
// const doSomething = ()=>{
//     alert("doing something");
// }

// h2.addEventListener("click",doSomething,false); //adding eventListener
// h2.removeEventListener("click",doSomething,false); //removing eventListener

// h2.addEventListener("click",function(event){
//     console.log(event.target);
//     event.target.textContent ="clicked";
// })

document.onreadystatechange = () =>{ //  onreadystatechange defines a function to be executed when readyState is changed.
    if(document.readyState === "complete"){ //readyState retrives a value that indicates the state(loading /interactive/ complete) of document.
        console.log("ready state completed");
        initApp();
    }
}

/*HTML document has multiple states:
loading --> html doc is not loaded and parsed
interactive --> html doc is loaded and parsed i.e DOM tree is loaded however the supporting scripts,images,stylesheets are still loading, this indiacted "DOMContentLoaded" event is about to fire.
complete --> html doc and all supporting scripts ,images, stylesheets are loaded and "load" event is about to fire.
*/

const initApp = ()=>{
    const div  = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        view.style.backgroundColor ="purple"; // similar to div but here target event h2 changes to purple from blue.
    }, false)

    div.addEventListener("click",(event)=>{
        div.style.backgroundColor = "blue"; //o/p changes from black to blue but only behind event.target which is h2 then bubbles upwards
        // event.stopPropagation(); // stops event bubbling and does not let it move upward
    },false) // useCapture = false -> event bubbles upward(from child -> parent) & useCapture = true -> event bubbles downward(from parent -> child)

    h2.addEventListener("click",(event)=>{
        event.target.textContent = "Clicked"; // here upon clicking h2 --> h2 is set at event.target--> Clicked
    })
}
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("readyState:complete")
        initApp1();
    }
})
const initApp1 = ()=>{
    const div  = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event)=>{
        view.classList.toggle("purple"); // classList allows for manipulation of element's class attribute as a set of white space seperated tokens
        view.classList.toggle("darkblue"); //example - <section> has class = "view1" --> classList.add("blue") --> class = "view1 blue"
    }, false)

    div.addEventListener("click",(event)=>{
        div.classList.toggle("blue"); // toggle removes if present and adds if not present
        div.classList.toggle("black");
    },false)

    h2.addEventListener("click",(event)=>{
        event.target.textContent === "My 2nd View" ? event.target.textContent = "Clicked" : event.target.textContent = "My 2nd View";
    })
}
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("readyState : Complete");
        initApp2();
    }
})
const initApp2 =()=>{
    const form = view3.querySelector("form");
    form.addEventListener("submit",(event)=>{
        event.preventDefault(); // prevents the default action from happenning
        console.log("submit Event");
    })
}
 

