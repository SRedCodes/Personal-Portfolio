// //do while Loop
let myNumber = 0;
do{
    myNumber=myNumber+1;
    console.log(`the DO loop number is ${myNumber}`);
}while(myNumber<50);

// //for loop
let i=0;
for(;i<50;){
    i++;
    console.log(i);
    
}

//for loop to print name
let myName= "Srikanth";
let myLetter;
for(i=0;i<myName.length;i++){
    myLetter=myName.charAt(i);
    console.log(myLetter);
}

//while loop to print name
//  let myName="srikanth";
 let counter=0;
//  let myLetter;
 let nameLength= myName.length;
 while(true){
    myLetter=myName[counter];
    if(counter===nameLength-1){
        console.log(myLetter);
        break;
    }
    else{
        console.log(myLetter);
    }
    counter++;
 }
