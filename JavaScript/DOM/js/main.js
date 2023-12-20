//DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display="flex";
view2.style.display="none";
const view = document.getElementsByClassName("view");
console.log(view);
const views= document.querySelectorAll(".view");
console.log(views);
const divs = view1.getElementsByTagName("div"); // here we need not write document.getElementsByTagName as view1 is assigned to document.
console.log(divs);
const newDivs = view1.querySelectorAll("div");
console.log(newDivs);
const evenDivs = view1.querySelectorAll("div:nth-of-type(even)");
console.log(evenDivs);
for(i=0 ; i<evenDivs.length ; i++){
    evenDivs[i].style.backgroundColor ="chocolate";
    evenDivs[i].style.width = "75px";
    evenDivs[i].style.height= "75px";

}
const nav = document.querySelector("nav");
console.log(nav);
console.log(nav.children);// return HTML Collection array with h1.
const navinner = document.querySelector("nav").innerHTML // innerHTML gives out content inside that html element
console.log(navinner);
nav.textContent= "Srikanth's Page";
const navbar = document.querySelector("nav");
navbar.innerHTML ="<h1> Hello World</h1> <p> this is a text</p>"
console.log(navbar);
navbar.style.justifyContent="space-between";
console.log(navbar.parentElement);
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement.children); // returns only children elements
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.childNodes); // returns white spaces as text along with elements
console.log(evenDivs[0].parentElement.lastChild); // returns last child even if it is white space it'll return text
console.log(evenDivs[0].parentElement.lastElementChild); // returns the last child element under parent
console.log(evenDivs[0].parentElement.firstChild); // returns first child even if it is white space it'll return text
console.log(evenDivs[0].parentElement.firstElementChild); // returns the first child element under parent
console.log(evenDivs[0].nextSibling); // returns next child even if it is white space it'll return text
console.log(evenDivs[0].nextElementSibling); // returns the next child element under parent
console.log(evenDivs[0].previousSibling); // returns first child even if it is white space it'll return text
console.log(evenDivs[0].previousElementSibling); // returns the first child element under parent

view1.style.display= "none";
view2.style.display= "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";


while(view2.lastChild){
    view2.lastChild.remove();
}
const newLayout = (parent ,num)=>{
       const newDiv = document.createElement("div");
       newDiv.textContent = num;
       newDiv.style.backgroundColor = "#000";
       newDiv.style.width = "100px";
       newDiv.style.height = "100px";
       newDiv.style.margin = "10px";
       newDiv.style.display = "flex";
       newDiv.style.justifyContent = "center";
       newDiv.style.alignItems = "center";
       parent.append(newDiv);
}
for(i = 1 ; i <=12 ; i++){
    newLayout(view2,i);
}



