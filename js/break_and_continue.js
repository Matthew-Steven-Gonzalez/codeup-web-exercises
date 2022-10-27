"use strict";

//exercise #6


do {
    let choose = prompt("Choose an odd number between 1-50?");

    if( choose % 2 !== 0){
        console.log("Your input was even!");
    }else if( choose <= 0){
        console.log("Your number is too low.");
    }else if( choose > 50){
        console.log("Your number is too high.");
    }else {
        console.log("Good choice!");
        break;
    }

} while(true)





// for (let i = 0; i < 50; i++) {
//
//     if (parseInt(choose) >= 1 && parseInt(choose) < 50 && parseInt(choose) %2 !== 0) {
//         if( i === parseInt(choose)){
//             console.log("Yikes! Skipping number : " + i );
//             continue;
//         }
//
//         console.log('Here is an odd number: ' + i);
//     }
//     else{
//         console.log("You have entered an invalid input.")
//         ;
//     }
//
// }

// for (let i = 0; i < 50; i++) {
//
//     if (i % 2 === 0 ) {
//         continue;
//     }
//     if( i === parseInt(choose)){
//         console.log("Yikes! Skipping number : " + i );
//         continue;
//     }
//
//     console.log('Here is an odd number: ' + i);
// }
//
// console.log("thank you!")

