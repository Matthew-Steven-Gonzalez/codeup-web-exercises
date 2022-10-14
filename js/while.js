"use strict"


//exercise #7
let i = 1;

while (i < 65536) {
    let x= i * 2;
    console.log( x );
    i *= 2;
}


// exercise #8

let i = 10;

do {
    console.log(' #' + i);
    i++;
} while (i < 10);