//Functions
//getting user name from email address
function getUserNameFromEmail(email) {
    
    return email.slice(0,email.indexOf('@'));

}
 console.log(getUserNameFromEmail("player@gmail.com"));