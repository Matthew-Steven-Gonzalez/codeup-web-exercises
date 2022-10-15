"use strict";

// exercise #6

let choose =(prompt("Choose an odd number between 1-50?"));

for (let i = 0; i < 50; i++) {

    if (parseInt(choose) >= 1 && parseInt(choose) < 50) {
        break;
    }
    {
        console.log("You have entered a number outside 1-50!")
        break;
    }
}

for (let i = 0; i < 50; i++) {

    if (i % 2 === 0 ) {
        continue;
    }
    if( i === parseInt(choose)){
        console.log("Yikes! Skipping number : " + i );
        continue;
    }

    console.log('Here is an odd number: ' + i);
}


