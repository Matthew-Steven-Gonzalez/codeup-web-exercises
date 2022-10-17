"use strict"


//exercise #7 Done
// let i = 1;
//
// while (i < 65536) {
//     let x= i * 2;
//     console.log( x );
//     i *= 2;
// }
//

// exercise #8

let allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones);


do {
    let conesToBuy = Math.floor( Math.random()* 5)+1;
    allCones -= conesToBuy;

    if((allCones - conesToBuy) < 0){
        console.log("Cannot sell you " + conesToBuy + " cones I only have " + allCones + " ...");
    }else{
        allCones -= conesToBuy;
        console.log(conesToBuy + " cones sold...");
    }

    console.log("Number of cones left " + allCones);

}while( allCones > 0){
    console.log("We sold all the cones")
}


//
// do {
//     let factor = Math.floor(Math.random() * 5) + 1;
//     console.log( + i);
//     i -= factor ;
//     } while (allCones >= 0);