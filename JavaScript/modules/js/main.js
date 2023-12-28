//Modules
import playingGuitar from "./guitar.js";
import {shredding ,plucking} from "./guitar.js";

/* in the event of functions imported having same name as our functions....
the imported functions can be renamed using "as" keyword as shown below */

import { shredding as shred , plucking as pluck } from "./guitar.js";

console.log(playingGuitar());
console.log(shred());
console.log(pluck());

/* importing all functions at the same time using "*"...
all functions are imported as class with a class name and accessed using . notation */
import *  as Guitar from "./guitar.js"; 
console.log(Guitar.default()); // here default takes places of its function name i.e playingGuitar
console.log(Guitar.plucking());
console.log(Guitar.shredding());

import {User} from "./user.js"; // "{}" are used only when class is not set to default
const newUser = new User("Bittu","srik@gmail.com");
console.log(newUser.name);
console.log(newUser.greeting());