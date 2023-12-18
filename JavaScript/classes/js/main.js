// javascript classes
// classes are named with  1st letter as Uppercase.
class Pizza { // a class is just like a template for object , so it can be used to create mutliple objects of same type
    constructor(pizzaTopping, pizzaSize){ // all values/data pertaining to the object are stored here
        this.topping = pizzaTopping; // "this" is a substitute for the new object (yet to be created).
        this.crust = "thin";
        this.size = pizzaSize;
    }
    pizzaFunction() { // this is a function using which operations are performed on data.
        console.log(`this is a ${this.size} ${this.topping} ${this.crust} crust pizza.`);
    }
}

const ovenStory = new Pizza("pepperoni" , "large"); // this creates an object ovenStory with class template Pizza();
ovenStory.pizzaFunction();
console.log(ovenStory.topping);

class SpecialityPizza extends Pizza{

    constructor(pizzaTopping, pizzaSize,slices){
        super(pizzaTopping,pizzaSize) // used to inherit above class into this class
        this.special = "Supreme" ;
        this.slice = slices;
    }
    slices(){
        console.log(`this is a ${this.size} ${this.topping} ${this.special} ${this.crust} crust pizza & it has ${this.slice} slices`);
    }

}
const mySpeciality = new SpecialityPizza("sausage","Large",10);
mySpeciality.slices();

