// scopes of var , let  & const
var x = 1; //function Scoped
let y = 2; //block Scoped
const z = 3 ; //block Scoped
console.log(`global X: ${x}`);
console.log(`global Y: ${y}`);
console.log(`global Z: ${z}`);

function myFunc(){
   var x = 4;
   let y = 5 ;
   const z = 6 ;
   

   {
      var x = 7;
      let y = 8;
      const z = 9 ;
   console.log(`Block X: ${x}`);
   console.log(`Block Y: ${y}`);
   console.log(`Block Z: ${z}`);
   }
   console.log(`Function X: ${x}`); // since var is function scoped o/p = 7 , since latest assignment is 7.
   console.log(`Function Y: ${y}`); // since let is block scoped y= 8 diminishes & y = 5 will be o/p. 
   console.log(`Function Z: ${z}`);
}
myFunc();

