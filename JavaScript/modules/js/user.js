export class User{
    constructor(name , email){
        this.email= email;
        this.name = name;
    }
    greeting (){
        return `Hi ! This is ${this.name}`;
    }
}