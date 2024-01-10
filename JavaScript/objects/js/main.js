// const myObj = { name:"sri" , age: 26};
// console.log(myObj.age);
// const myNewObj = {
//     age : 26 ,
//     firstName : "srikanth",
//     lastName : "Reddy",
//     beverages:{
//         morning : "tea",
//         evening : "coffee",
//     } ,
//     activities: ["sleep", "workout", "code"],
//     action : function(){
//         return "Hello World"

//     },
//     overaction : function(){
//         return `time for ${this.firstName}` // this is used to access any key-value inside the same object
//     }
// }
// console.log(myNewObj.age);
// console.log(myNewObj["firstName"]);
// console.log(myNewObj.beverages.evening);
// console.log(myNewObj.activities[1]);
// console.log(myNewObj.overaction());
// console.log(myNewObj.action());

//inheretance
const vehicle = {
    wheels: 4 ,
    type: "gas",
    engine: function(){
        return "vrroommm!"
    }
}
console.log(vehicle.engine());
const truck = Object.create(vehicle);// Object constructor creates a object with inheritance from vehicle object
truck.doors= 2; // adding values to object
console.log(truck); // displays only values explicitly written in truck Object . i.e {doors:2}
console.log(truck.type);
console.log(truck.wheels); // not mentioned in truck but inherited from vehicle return 4.
console.log(truck.engine()); // returns o/p vrroommm!!!
console.log(truck.hasOwnProperty("wheels")); //returns false as wheels is not explicitly defined in this object

const tesla = Object.create(vehicle);
tesla.doors = 4;
tesla.type = () =>{
    return "Electric";
}
tesla.engine = function(){return "shhhhhh..."}
console.log(tesla);
console.log(tesla.engine());
console.log(tesla.type());

const band = {
    vocals : "Srikanth",
    guitar : "Prashanth",
    bass : "Ram",
    drums : "Cherry",
}
 console.log(band);
 console.log(Object.keys(band));
 console.log(Object.values(band));

 for( let role in band){
    console.log(band[role]); // here key in a object is like an index in an array.
 }
 for (role in band){
    console.log(` on ${role} is ${band[role]}`); // o/p on vocals is srikanth .....
 }

 const {drums , guitar , bass , vocals} = band ; // if key name === variable name , assignment order is not considered.
 console.log(drums); // o/p Cherry
 console.log(guitar); // o/p Prashanth
 console.log(bass); // o/p Ram
