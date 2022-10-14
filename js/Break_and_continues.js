"use strict";

// exercise #6


let choose =(prompt("Choose an odd number between 1-50?"));

for (let i = 0; i < 50; i++) {

    if (choose % 2 == 0) {
        console.log('You have choose an even number');
        // use the break keyword to exit from the while loop
        break;
    }
    else if(choose == i) {
        console.log("test")

            continue;
    }
            if (parseInt(choose) >= 1 && parseInt(choose) < 50) {
                if (choose == i && i % 2 != 0 || choose) {
                    console.log("Yikes! skipping number: " + choose);
                } else if (i % 2 != 0) {
                    console.log("Here is an odd number:  " + i);
                }
            } else {
                console.log("You have entered a number outside of 1-50")

            }
        }





// for (let i = 0; i < 50; i++) {
//     if()
// }