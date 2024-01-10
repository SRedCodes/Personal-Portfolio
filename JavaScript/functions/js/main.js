//Functions
//getting user name from email address
function getUserNameFromEmail(email) {
    
    return email.slice(0,email.indexOf('@'));

}
 console.log(getUserNameFromEmail("pOne@gmail.com"));

 
 //anonymous function
 let getUserNameFromMail = function(mail){
    return mail.slice(0,mail.indexOf("@"));
 }
 console.log(getUserNameFromMail('bittu@gmail'));
 
 
 //arrow function
 const toProperCase = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
 };
 console.log(toProperCase("sriKANtH"));
