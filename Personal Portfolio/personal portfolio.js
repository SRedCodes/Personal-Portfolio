const navigationBar = document.getElementById("nav-bar");
const navBarHeight = navigationBar.offsetHeight ;
console.log(navBarHeight);
document.documentElement.style.setProperty("scroll-padding",navBarHeight + "px"); /* figures out height on nav container & converts it into pixels for scroll padding*/

/*Form Validations */
const clientNameRegEx = /^(([a-zA-z]+[ ]*[a-zA-z]+)/g;
const emailRegEx = /^([A-Za-z0-9]+@[a-zA-Z]+\.com)/g;
const subjectRegEx = /^(\b\w+\b[ ,.&]*){1,20}$/g;
const messageRegEx = /^(?:\b\w+\b[\s\r\n]*){1,50}$/g;

const formatCheck = (fieldID,regExFormat,formatClass)=>{
document.getElementById(fieldID).addEventListener("input",(event)=>{
    const userInput = document.getElementById(fieldID);
    const formatHint = document.querySelector(formatClass);
    const flag = regExFormat.test(userInput.value);
    if(!flag){
        formatHint.classList.add("block");
        formatHint.classList.add("invalid");
    }else{
        formatHint.classList.remove("block");
        formatHint.classList.remove("invalid");
    }
});
};

formatCheck("clientName",clientNameRegEx,".cName");
formatCheck("Email",emailRegEx,".cMail");
formatCheck("Subject",subjectRegEx,".cSubject");
formatCheck("Message",messageRegEx,".cMessage");

