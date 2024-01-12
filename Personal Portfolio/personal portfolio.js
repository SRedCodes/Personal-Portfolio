const navigationBar = document.getElementById("nav-bar");
const navBarHeight = navigationBar.offsetHeight;
document.documentElement.style.setProperty("scroll-padding",navBarHeight + "px"); /* figures out height on nav container & converts it into pixels for scroll padding*/

/* Contact Form Validations using Regex*/
const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?([a-zA-Z]{1,})?)/;
const emailRegex = /^([a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,})/;
const subjectRegex = /^(?:\b\w+\b[\s\r\n,.]*){1,20}$/;
const messageRegex = /^(?:\b\w+\b[\s\r\n,.]*){1,150}$/;
const formatChecker = (inputID,regex,hintClass)=>{
document.getElementById(inputID).addEventListener("input",(event)=>{
    const input = document.getElementById(inputID);
    const formatHint = document.getElementsByClassName(hintClass)[0];
    const field = input.value;
    const found = regex.test(field);
    if(!found && field.length){
        input.classList.add("invalid");
        formatHint.classList.add("invalid");
        formatHint.classList.add("block");
    }else{
        input.classList.remove("invalid");
        formatHint.classList.remove("invalid");
        formatHint.classList.remove("block");
    }
});
}
formatChecker("clientName",nameRegex,"cName");
formatChecker("email",emailRegex,"cMail");
formatChecker("subject",subjectRegex,"cSubject");
formatChecker("message",messageRegex,"cMessage");
