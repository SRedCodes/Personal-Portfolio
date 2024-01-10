// javascript classes
// classes are named with  1st letter as Uppercase.
class Pizza { // a class is just like a template for object , so it can be used to create mutliple objects of same type
    constructor(pizzaTopping, pizzaSize){ // all values/data pertaining to the object are stored here
        this.topping = pizzaTopping; // "this" is a substitute for the new object (yet to be created).
        this._crust = "thin";
        this.size = pizzaSize;
    }
    getCrust(){
        console.log(this._crust);
    }
    setCrust(myCrust){
        this._crust=myCrust;
    }
    pizzaFunction() { // this is a function using which operations are performed on data.
        console.log(`this is a ${this.size} ${this.topping} ${this.crust} crust pizza.`);
    }
}

const ovenStory = new Pizza("pepperoni" , "large"); // this creates an object ovenStory with class template Pizza();
ovenStory.pizzaFunction();
ovenStory.setCrust("Cheese Burst");
ovenStory.getCrust();

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

class burger {
    sauce ="tomato"; // is public property cam be accessed outside this class
    #patty; // patty is # private property and cannot be accessed outside this class burger
    #size;
    constructor(size){
        this.size= size;
        this.#patty = "chicken";
    }
    getPatty(){
        console.log(this.#patty);
    }
    setPatty(myPatty){
        this.#patty = myPatty;
    }

    order(){
        console.log(`this is a ${this.size} size ${this.#patty} Burger`);
    }
}
const myBurger = new burger("Whopper");
myBurger.order();
myBurger.setPatty("goat");
myBurger.getPatty(); //though patty is private we can access it using function.
myBurger.order();
myBurger.#patty = "turkey"; // throws error patty is pvt and is not accessible outside burger class.


