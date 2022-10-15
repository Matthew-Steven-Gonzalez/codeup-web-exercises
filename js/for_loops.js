"use strict";

// exercise #2
let number = prompt("Please pick a number?")


function showMultiplicationTable(  ){
    for( let i = 0; i <= 10; i++) {
        let table = i * number
        console.log(number + " x " + i + " = " + table);
    }
}

showMultiplicationTable(number);


//exercise #3


for( let i = 1; i <= 10; i++){
    var random = Math.floor((Math.random() * 200) + 20);
    if( random % 2 === 0){
        console.log( random + " is even");
    }
    else{
        console.log( random + " is odd");
    }
}

//exercise #4

let char = "";

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        char += i;
    }
    char += "\n";
}
console.log(char);

//exercise #5

for ( let i =100; i >= 5 ; i = i-5){
    console.log(i);
}




